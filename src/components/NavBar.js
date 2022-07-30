
import { useContext } from 'react';
import { BsSearch } from 'react-icons/bs'
import { BsSun } from 'react-icons/bs'
import { ColorMood, ColorMoodSpatcher } from '../App';

const NavBar = () => {
    const mood = useContext(ColorMood);
    const setMood = useContext(ColorMoodSpatcher)

    const changeMoodHandler = () => {
        if (mood === 'light')
            setMood('dark');
        else
            setMood('light');
    }

    return (
        <div className={mood === 'light' ? "NavBar" : "NavBar_D"}>
            <div className='NavBar_detail'>
                <div className='title_logo'> ToDoApp </div>
                <div className='navbarItems'>
                    <span className={mood === 'light' ? "search" : "search_D"}> <BsSearch /> </span>
                    <span className={mood === 'light' ? "nightMod" : "nightMod_D"} onClick={changeMoodHandler}> <BsSun /> </span>
                    <a href="https://github.com/ArianNajafi" >
                        <img src="https://avatars.githubusercontent.com/u/86532644?s=400&u=0bb418705093607fcc9109d27cdc9f9d1dd5354f&v=4" className='avatar' alt='ArianNajafi'></img>
                        <span className={mood === 'light' ? "online" : "online_D"}></span>
                    </a>
                </div>
            </div>

        </div>

    );
}

export default NavBar;