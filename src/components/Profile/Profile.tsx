import React from 'react';
import { PokemonTypes } from '../../types/pokemon-type';
import s from "./Profile.module.css";

type PropsTypes = {
    profile: PokemonTypes,
}

const Profile:React.FC<PropsTypes> = (props) => {
    return (
        <section className={s.profile}>
            <div className={s.profileWrapper}>
                <h1 className={s.profileTitle}>Profile</h1>
                <div className={s.profileInfo}>
                    <span className={s.profileName}>{props.profile.name}</span>
                    <span className={s.profileName}>id: {props.profile.id}</span>
                    <span className={s.profileStatus}>status: {props.profile.date ? `been caught on `+ props.profile.date  : `hasn't been caught yet `}</span>
                    <div>
                        {
                            <img className={s.profileImg} src={props.profile.id < 721 ? `/src/pokemons/${props.profile.id}.png`: "https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png"} width={100} alt={`pokemon${props.profile.name}`} height={"auto"} />
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Profile;
