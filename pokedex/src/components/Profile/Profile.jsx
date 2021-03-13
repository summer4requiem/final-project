import React from 'react';
import s from "./Profile.module.css";

const Profile = (props) => {
    console.log(props.profile);
    return (
        <section className={s.profile}>
            <div className={s.profileWrapper}>
                <h1 className={s.profileTitle}>Profile</h1>
                <div className={s.profileInfo}>
                    <span className={s.profileName}>{props.profile.name}</span>
                    <span className={s.profileName}>id: {props.profile.id}</span>
                    <span>status: {props.profile.date? props.profile.date + ' been caught ': `haven't been caught yet `}</span>
                    <div>
                        <img className={s.profileImg} src={process.env.PUBLIC_URL + `/pokemons/${props.profile.id}.png`} width={100} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Profile;
