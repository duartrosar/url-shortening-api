import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={`${inter.className} overflow-x-hidden`}>
        <Hero />
        <div className="px-6 sm:container mx-auto lg:px-14">
          <p className="py-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio illum
            minima deserunt labore maiores vitae autem consequatur soluta
            ducimus quae? Corrupti amet, quisquam assumenda vero provident rerum
            voluptatum possimus accusantium aperiam. Est alias ratione id
            dolores voluptatibus iste delectus quae asperiores aperiam dolor
            laudantium enim modi, obcaecati eveniet. Vel rerum ducimus officiis
            iusto earum animi alias provident eius inventore, odit corporis
            magnam. Inventore aperiam quae, recusandae autem eius iure, dolorem
            reiciendis in, nam qui est id earum quibusdam? Nobis qui recusandae
            amet consequuntur, sunt vero corrupti libero quas excepturi corporis
            minus exercitationem quos inventore nulla, tenetur vitae ipsa et
            cupiditate.
          </p>
          <p className="py-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio illum
            minima deserunt labore maiores vitae autem consequatur soluta
            ducimus quae? Corrupti amet, quisquam assumenda vero provident rerum
            voluptatum possimus accusantium aperiam. Est alias ratione id
            dolores voluptatibus iste delectus quae asperiores aperiam dolor
            laudantium enim modi, obcaecati eveniet. Vel rerum ducimus officiis
            iusto earum animi alias provident eius inventore, odit corporis
            magnam. Inventore aperiam quae, recusandae autem eius iure, dolorem
            reiciendis in, nam qui est id earum quibusdam? Nobis qui recusandae
            amet consequuntur, sunt vero corrupti libero quas excepturi corporis
            minus exercitationem quos inventore nulla, tenetur vitae ipsa et
            cupiditate.
          </p>
        </div>
      </main>
    </>
  );
}
