export default function GameRequirements() {
    return (
        <div className="flex flex-col w-[92%] xl:w-5/6 mx-auto">
            <h1 className="text-4xl lg:text-5xl font-semibold mb-10 text-center">
                System Requirements
            </h1>

            {/** mobile version */}
            <div className="flex flex-col gap-4 lg:hidden">
                <div>
                    <h2 className="text-2xl font-semibold flex-1 border-y border-main-text1 py-5">
                        Minimum System Requirements
                    </h2>
                    <ul className="flex-1 pl-10 list-disc py-5 border-b border-main-text1 text-main-text2 text-lg">
                        <li>
                            <strong>OS: </strong>Windows 7 or higher
                        </li>
                        <li>
                            <strong>Processor: </strong>Intel Core i5
                        </li>
                        <li>
                            <strong>Memory: </strong>8 GB RAM
                        </li>
                        <li>
                            <strong>Graphics: </strong>NVIDIA GeForce GTX 960 or equivalent
                        </li>
                        <li>
                            <strong>DirectX: </strong>Version 11 or higher
                        </li>
                        <li>
                            <strong>Storage: </strong>15 GB available space
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold flex-1 border-y border-main-text1 py-5">
                        Recommended System Requirements
                    </h2>
                    <ul className="flex-1 pl-10 list-disc py-5 border-b border-main-text1 text-main-text2 text-lg">
                        <li>
                            <strong>OS: </strong>Windows 10 or higher
                        </li>
                        <li>
                            <strong>Processor: </strong>Intel Core i7
                        </li>
                        <li>
                            <strong>Memory: </strong>16 GB RAM
                        </li>
                        <li>
                            <strong>Graphics: </strong>NVIDIA GeForce GTX 2060 or equivalent
                        </li>
                        <li>
                            <strong>DirectX: </strong>Version 12 or higher
                        </li>
                        <li>
                            <strong>Storage: </strong>20 GB available space
                        </li>
                    </ul>
                </div>
            </div>

            {/** non-mobile version */}
            <div className="hidden lg:block">
                <div className="py-6 border-y border-main-text1 flex">
                    <h2 className="text-2xl font-semibold flex-1">
                        Minimum System Requirements
                    </h2>
                    <h2 className="text-2xl font-semibold flex-1">
                        Recommended System Requirements
                    </h2>
                </div>
                <div className="py-6 border-b border-main-text1 flex text-main-text2 text-lg">
                    <ul className="flex-1 pl-10 list-disc">
                        <li>
                            <strong>OS: </strong>Windows 7 or higher
                        </li>
                        <li>
                            <strong>Processor: </strong>Intel Core i5
                        </li>
                        <li>
                            <strong>Memory: </strong>8 GB RAM
                        </li>
                        <li>
                            <strong>Graphics: </strong>NVIDIA GeForce GTX 960 or equivalent
                        </li>
                        <li>
                            <strong>DirectX: </strong>Version 11 or higher
                        </li>
                        <li>
                            <strong>Storage: </strong>15 GB available space
                        </li>
                    </ul>
                    <ul className="flex-1 pl-10 list-disc">
                        <li>
                            <strong>OS: </strong>Windows 10 or higher
                        </li>
                        <li>
                            <strong>Processor: </strong>Intel Core i7
                        </li>
                        <li>
                            <strong>Memory: </strong>16 GB RAM
                        </li>
                        <li>
                            <strong>Graphics: </strong>NVIDIA GeForce GTX 2060 or equivalent
                        </li>
                        <li>
                            <strong>DirectX: </strong>Version 12 or higher
                        </li>
                        <li>
                            <strong>Storage: </strong>20 GB available space
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}