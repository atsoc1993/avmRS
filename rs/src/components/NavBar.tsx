import { useNavigate } from 'react-router-dom'
import '../index.css'

export default function NavBar({ selected }: { selected: string }) {

    const navigate = useNavigate();

    type SelectedType = {
        character: Boolean;
        crafting: Boolean;
        battle: Boolean;
        market: Boolean;
    };

    const buttonActive: SelectedType = {
        character: selected === 'character' ? true : false,
        crafting: selected === 'crafting' ? true : false,
        battle: selected === 'battle' ? true : false,
        market: selected === 'market' ? true : false
    };

    const baseStyling = 'rounded-4xl h-2/5 w-1/5 m-10 shadow-lg shadow-sky-900 mx-auto place-content-center transition-transform hover:bg-amber-300 duration-700';

    const activeStyling = 'bg-amber-300 ';
    const inactiveStyling = 'bg-sky-200 hover:scale-110 ';
    const textStyling = 'text-2xl text-center';
    
    return (
        <div className='flex flex-row absolute h-1/4 w-full justify-evenly'>
            <div className={( buttonActive.character ? activeStyling: inactiveStyling) + baseStyling}
                onClick={() => navigate('/')}
            >
                <h1 className={textStyling}>Character</h1>
            </div>
            <div className={( buttonActive.crafting ? activeStyling: inactiveStyling) + baseStyling}

                onClick={() => navigate('/crafting')}
            >
                <h1 className={textStyling}>Crafting</h1>
            </div>
            <div className={( buttonActive.battle ? activeStyling: inactiveStyling) + baseStyling}

                onClick={() => navigate('/battle')}
            >
                <h1 className={textStyling}>Battle</h1>
            </div>
            <div className={( buttonActive.market ? activeStyling: inactiveStyling) + baseStyling}

                onClick={() => navigate('/market')}
            >
                <h1 className={textStyling}>Market</h1>
            </div>
        </div>
    );
};