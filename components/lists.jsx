import Image from "next/image"
import List from '@/components/elements/list'
import Link from "next/link"

const Lists = (params) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
            {params.version === "full" ? <>
                <List type="Filmy" nazwa="Na wieczór" image="/lists/na-wieczor.jpg" href="na-wieczor" locked={false} />
                <List type="Filmy" nazwa="Horrory" image="/lists/horrory.jpg" href="horrory" locked={false} />
                <List type="Filmy" nazwa="Stare horrory" image="/lists/stare-horrory.jpg" href="stare-horrory" locked={false} />
                <List type="Filmy" nazwa="Gangsterskie" image="/lists/gangsterskie.jpg" href="gangsterskie" locked={true} />
                <List type="Filmy" nazwa="Polskie" image="/lists/polskie.jpg" href="polskie" locked={false} />
                <List type="Filmy" nazwa="Polskie klasyki" image="/lists/polskie-klasyki.jpg" href="polskie-klasyki" locked={false} />
                <List type="Filmy" nazwa="Pieniądze" image="/lists/pieniadze.jpg" href="pieniadze" locked={false} />
                <List type="Filmy" nazwa="Zagadka" image="/lists/zagadka.jpg" href="zagadka" locked={false} />
                <List type="Filmy" nazwa="Wojsko" image="/lists/wojsko.jpg" href="wojsko" locked={true} />
                <List type="Filmy" nazwa="Wojenne" image="/lists/wojna.jpg" href="wojna" locked={false} />
                <List type="Filmy" nazwa="Animacje" image="/lists/animacje.jpg" href="animacje" locked={false} />
                <List type="Filmy" nazwa="Komediowe" image="/lists/komediowe.jpg" href="komediowe" locked={false} />
                <List type="Filmy" nazwa="Na faktach" image="/lists/na-faktach.jpg" href="na-faktach" locked={false} />
                <List type="Filmy" nazwa="Kosmos" image="/lists/kosmos.jpg" href="kosmos" locked={true} />
                <List type="Filmy" nazwa="Hip hop" image="/lists/muzyka-hiphop.jpg" href="muzyka-hiphop" locked={false} />
                <List type="Filmy" nazwa="Bokserskie" image="/lists/bokser.jpg" href="bokser" locked={false} />
            </> : <>
            <List type="Filmy" nazwa="Na wieczór" image="/lists/na-wieczor.jpg" href="na-wieczor" locked={false} />
                <List type="Filmy" nazwa="Horrory" image="/lists/horrory.jpg" href="horrory" locked={false} />
                <List type="Filmy" nazwa="Stare horrory" image="/lists/stare-horrory.jpg" href="stare-horrory" locked={false} />
                <List type="Filmy" nazwa="Gangsterskie" image="/lists/gangsterskie.jpg" href="gangsterskie" locked={true} />
                <List type="Filmy" nazwa="Polskie" image="/lists/polskie.jpg" href="polskie" locked={false} />
                <List type="Filmy" nazwa="Polskie klasyki" image="/lists/polskie-klasyki.jpg" href="polskie-klasyki" locked={false} />
                <List type="Filmy" nazwa="Pieniądze" image="/lists/pieniadze.jpg" href="pieniadze" locked={false} />
                <List type="Filmy" nazwa="Zagadka" image="/lists/zagadka.jpg" href="zagadka" locked={false} />
                <List type="Filmy" nazwa="Wojsko" image="/lists/wojsko.jpg" href="wojsko" locked={true} />
                <List type="Filmy" nazwa="Wojenne" image="/lists/wojna.jpg" href="wojna" locked={false} />
                <List type="Filmy" nazwa="Animacje" image="/lists/animacje.jpg" href="animacje" locked={false} />
                <Link type="Filmy" href="/listy-tematyczne/filmy" className="bg-white h-16 rounded-xl relative overflow-hidden flex hover:brightness-75 transition">
                    <div class="absolute flex w-full h-full justify-center items-center">
                        <h3 className="font-bold text-2xl uppercase text-brand">WIĘCEJ LIST</h3>
                    </div>
                </Link>
            </>}
           

           
        </div>
    )
}

export default Lists