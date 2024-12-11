import ItemList from "./item-list";

export default function Page(){
    return (
        <main className="p-6">
            <h1 className="text-4xl pb-10">Shopping List</h1>
            <ItemList/>
        </main>
    );
}