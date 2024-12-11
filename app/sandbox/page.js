export default function Page(){
    return (
        <div>
            <h1>
                We out here making react code
            </h1>
            <Component name="Belh"/>
        </div>
    )
}

function Component({name}){
    return(
        <>
            <p>This was a prop: {name}</p>
        </>
    )
}