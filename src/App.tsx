
import "./style/theme/prima/default-theme.scss"
import 'virtual:uno.css'
import {createMemo, createSignal} from "solid-js";

export default function App() {

    const [firstName, setFirstName] = createSignal("")
    const [lastName, setLastName] = createSignal("")

    function onFirstNameChange(e: Event) {
        setFirstName((e.target as HTMLInputElement).value)
    }

    function onLastNameChange(e: Event) {
        setLastName((e.target as HTMLInputElement).value)
    }

    const fullName = createMemo(() => `${firstName()} ${lastName()}`)
    return <div flex={"row space-around"} spacing={"mt-10"}>
        <article flex={"col gap-6"} sizing={"min-w-80 max-w-300 w-50%"}>
            <hgroup>
                <h1>Solid JS Template</h1>
                <p>A template for Solid JS projects</p>
            </hgroup>
            <article flex={"col gap-4"}>
                <div>
                    <label>First Name</label>
                    <input onInput={onFirstNameChange}/>
                </div>
                <div>
                    <label>Last Name</label>
                    <input onInput={onLastNameChange}/>
                </div>
                <p>Hello {fullName()}</p>
            </article>
        </article>
    </div>
}
