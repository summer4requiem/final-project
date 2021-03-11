import React from 'react';
import s from "./Profile.module.css";

const Profile = (props) => {
    return (
        <section className={s.profile}>
            <div className={s.profileWrapper}>
                <h1 className={s.profileTitle}>Profile</h1>
                <div className={s.profileInfo}>
                    <span className={s.profileName}>{props.profile.name}</span>
                    <span>id: {props.profile.id}</span>
                    <div>
                        <img className={s.profileImg} src={process.env.PUBLIC_URL + `/pokemons/${props.profile.id}.png`} width={100} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile;
