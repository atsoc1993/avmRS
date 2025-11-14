import NavBar from "../components/NavBar";
import NavBarSpacer from "../components/NavBarSpacer";

export default function CharacterPage() {

    const baseSlotStyle = 'bg-slate-300 rounded-2xl w-35 h-35 place-self-center m-5 content-center shadow-lg shadow-slate-600'
    const baseSlotDescStyle = "w-fit place-self-center opacity-30"

    return (
        <>
            <NavBar selected="character" />
            <NavBarSpacer />

            <div className="h-3/4">
                <div className={baseSlotStyle}>
                    <h1 className={baseSlotDescStyle}>Head</h1>
                </div>
                <div className="flex flex-row justify-center">
                    <div className={baseSlotStyle}>
                        <h1 className={baseSlotDescStyle}>Sword</h1>
                    </div>
                    <div className={baseSlotStyle}>
                        <h1 className={baseSlotDescStyle}>Gloves</h1>
                    </div>
                    <div className={baseSlotStyle}>
                        <h1 className={baseSlotDescStyle}>Body</h1>
                    </div>
                    <div className={baseSlotStyle}>
                        <h1 className={baseSlotDescStyle}>Shield</h1>
                    </div>

                </div>
                <div className={baseSlotStyle}>
                    <h1 className={baseSlotDescStyle}>Legs</h1>
                </div>
                <div className={baseSlotStyle}>
                    <h1 className={baseSlotDescStyle}>Shoes</h1>
                </div>
            </div>
        </>
    )
}