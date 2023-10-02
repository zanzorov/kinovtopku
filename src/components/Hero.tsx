import Image from "next/image";

const Hero = () => {
  return (
    <section className="text-center bg-white pb-10">
        <div className="w-40 mx-auto">
          <Image src={"/kino.png"} width={150} height={150} layout="responsive" alt={"hero image"} />
        </div>
        <h1 className="text-base text-gray-700 uppercase my-2">Добро пожаловать на Киновтопку</h1>
        <p className="text-gray-700 text-3xl font-bold px-4 ">Выключи это немедленно: <br></br>топ-10 худших фильмов и сериалов 21 века</p>
    </section>
  )
}

export default Hero