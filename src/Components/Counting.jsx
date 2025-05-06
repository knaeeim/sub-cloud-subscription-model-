import React from "react";
import CountUp from "react-countup";

const Counting = () => {
    return (
        <div className="w-11/12 mx-auto rounded-2xl md:px-20 md:pb-20 mt-8 pb-8">
            <div className="text-center space-y-4 md:w-9/12 w-full mx-auto">
                <h1 className="md:text-4xl text-lg font-bold">
                    Curated Lifestyle Boxes Just for You
                </h1>
                <p className="md:text-lg text-xs text-gray-600 max-w-2xl mx-auto">
                    Discover a world of handpicked lifestyle products, bundled
                    into irresistible monthly boxes — all at an affordable
                    price. From wellness to beauty and beyond, we’ve already
                    delighted countless customers. Now it’s your turn to unbox
                    joy.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
                <div className="bg-white px-10 py-10 rounded-2xl shadow-xl flex flex-col items-center space-y-3">
                    <img src={""} alt="" />
                    <span className="font-bold text-4xl">
                        <CountUp
                            start={0}
                            end={10000}
                            duration={2.75}
                            separator=""
                            enableScrollSpy={true}
                        />
                        +
                    </span>
                    <h1>Total Premium Customer</h1>
                </div>

                <div className="bg-white px-10 py-10 rounded-2xl shadow-xl flex flex-col items-center space-y-3">
                    <img src={""} alt="" />
                    <span className="font-bold text-4xl">
                        <CountUp
                            start={0}
                            end={5000}
                            duration={2.75}
                            separator=""
                            enableScrollSpy={true}
                        />
                        +
                    </span>
                    <h1>Total Reviews</h1>
                </div>

                <div className="bg-white px-10 py-10 rounded-2xl shadow-xl flex flex-col items-center space-y-3">
                    <img src={""} alt="" />
                    <span className="font-bold text-4xl">
                        <CountUp
                            start={0}
                            end={12}
                            duration={2.75}
                            separator=""
                            enableScrollSpy={true}
                        />
                        +
                    </span>
                    <h1>Total Products</h1>
                </div>

                <div className="bg-white px-10 py-10 rounded-2xl shadow-xl flex flex-col items-center space-y-3">
                    <img src={""} alt="" />
                    <span className="font-bold text-4xl">
                        <CountUp
                            start={0}
                            end={4}
                            duration={2.75}
                            separator=""
                            enableScrollSpy={true}
                        />
                        +
                    </span>
                    <h1>Total Category</h1>
                </div>
            </div>
        </div>
    );
};

export default Counting;
