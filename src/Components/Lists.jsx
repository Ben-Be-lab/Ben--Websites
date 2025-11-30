import afriica from '../assets/afriica.png'

const Lists = () => {
    return (
        <>
            <section className='grid grid-cols-2'>
                <div>
                    <ul className='flex flex-col gap-8'>
                        <div>
                            <li>Istanbul </li>
                            <li>Moskow </li>
                            <li>London</li>
                            <li>S. Petersburg </li>
                        </div>
                        <div>

                            <li>Warsaw </li>
                            <li>Belgrade </li>
                            <li>Budapest </li>
                            <li>Barcelona </li>
                        </div>
                        <div>
                            <li> Munich </li>
                            <li>Milan </li>
                            <li>Birminghan </li>
                            <li>Cologne </li>

                        </div>
                    </ul>
                </div>
                <div className='flex-row gap-8'>
                    <img src={afriica} width={849} height={569} alt="" />
                </div>


            </section>
        </>
    )
}

export default Lists
