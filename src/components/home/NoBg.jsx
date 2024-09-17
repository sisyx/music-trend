function NoBg() {
    return ( 
        <div className="h-96 flex justify-center text-justify text-white">
                <div className="flex w-1/3 items-center gap-2">
                    <div className="flex flex-col gap-5">
                        <p dir="rtl">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در،
                        </p>
                        <button className="bg-gradient-to-r from-primary-start to-primary-end pl-4 pr-4 pt-1 pb-1 rounded-md">با ما باشید</button>
                    </div>
                <img src="/src/assets/images/home-particlejs-insta.jpg" alt="" className="h-80 rounded-2xl bg-gradient-to-r hover:backdrop-blur-sm hover:from-primary-end hover:to-transparent hover:shadow-lg hover:shadow-primary" />
            </div>
            <div className="flex w-1/3 items-center gap-2">
                <img src="/src/assets/images/home-particlejs-telegram.png" alt="" className=" h-80 rounded-full hover:backdrop-blur-sm hover:bg-telegram hover:bg-opacity-10 hover:shadow-lg hover:shadow-telegram  " />
                <div className="flex flex-col gap-5">
                    <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در،
                    </p>
                    <button className="bg-telegram border-telegram border pl-4 pr-4 pt-1 pb-1 rounded-md hover:bg-white hover:text-telegram">با ما باشید</button>
                </div>
            </div>
        </div>
     );
}

export default NoBg;