import NavBar from "../components/NavBar";
import NavBarSpacer from "../components/NavBarSpacer";
import { resources } from "../constants";

export default function ResourcesPage() {

    return (
        <>
            <NavBar selected="resources" />
            <NavBarSpacer />

            <h1 className="text-4xl text-center m-10">Mining</h1>
            <div className="flex flex-row justify-evenly">

                {Object.values(resources.ore).map((ore) => (
                    <div className="bg-amber-300 flex flex-col p-6 rounded-2xl shadow-2xl shadow-black border-2 w-50">
                        <h1 className="text-center">{ore.name}</h1>
                        <img className='w-20 h-20 place-self-center' src={ore.image_url} />
                    </div>
                ))}
            </div>
            <h1 className="text-4xl text-center m-10">Woodcutting</h1>
            <div className="flex flex-row justify-evenly">

                {Object.values(resources.wood).map((wood) => (
                    <div className="bg-amber-300 flex flex-col p-6 rounded-2xl shadow-2xl shadow-black border-2 w-50">
                        <h1 className="text-center">{wood.name}</h1>
                        <img className='w-20 h-20 place-self-center' src={wood.image_url} />
                    </div>
                ))}
            </div>

        </>
    )
}