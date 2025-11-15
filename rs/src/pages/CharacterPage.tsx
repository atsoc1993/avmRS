import NavBar from "../components/NavBar";
import NavBarSpacer from "../components/NavBarSpacer";
import { type CharacterSet } from "./constants";

export default function CharacterPage({ characterSet }: { characterSet: CharacterSet }) {

    const baseSlotStyle = 'bg-slate-100 rounded-2xl w-20 h-20 place-self-center m-5 content-center shadow-lg shadow-slate-600'
    const baseSlotDescStyle = "w-fit place-self-center opacity-30"
    const imageStyle = "flex w-3/4 h-3/4 mx-auto"

    const headElement = characterSet.helm ? <img className={imageStyle} src={characterSet.helm} /> : <h1 className={baseSlotDescStyle}>Head</h1>
    const swordElement = characterSet.sword ? <img className={imageStyle} src={characterSet.sword} /> : <h1 className={baseSlotDescStyle}>Sword</h1>
    const bodyElement = characterSet.body ? <img className={imageStyle} src={characterSet.body} /> : <h1 className={baseSlotDescStyle}>Body</h1>
    const shieldElement = characterSet.shield ? <img className={imageStyle} src={characterSet.shield} /> : <h1 className={baseSlotDescStyle}>Shield</h1>
    const legsElement = characterSet.legs ? <img className={imageStyle} src={characterSet.legs} /> : <h1 className={baseSlotDescStyle}>Legs</h1>
    const bootsElement = characterSet.boots ? <img className={imageStyle} src={characterSet.boots} /> : <h1 className={baseSlotDescStyle}>Shoes</h1>

    return (
        <>
            <NavBar selected="character" />
            <NavBarSpacer />

            <div className="h-3/5">
                <div className={baseSlotStyle}>
                    {headElement}
                </div>
                <div className="flex flex-row justify-center">
                    <div className={baseSlotStyle}>
                        {swordElement}
                    </div>
                    <div className={baseSlotStyle}>
                        {bodyElement}
                    </div>
                    <div className={baseSlotStyle}>
                        {shieldElement}
                    </div>
                </div>
                <div className={baseSlotStyle}>
                    {legsElement}
                </div>
                <div className={baseSlotStyle}>
                    {bootsElement}
                </div>
            </div>
        </>
    )
}