"use client"

import ProductGrid from "./ProductGrid"
import ProductCard from "./ProductCard"
import HeroSection from "./HeroSection"
import CurvedSection from "./CurvedSection"
import Button from "./Button"

export default function ResponsiveHomeDemo() {
    return (
        <div>
            {/* Hero Section */}
            <HeroSection />

            {/* Product Section */}
            <section className="bm-section">
                <div className="bm-container">
                    <div className="flex items-center justify-center text-center mb-8 sm:mb-12 lg:mb-16 gap-4 sm:gap-6">
                        <h2
                            className="gradient-text2 text-transparent bg-clip-text font-sanggar"
                            style={{ fontSize: "var(--bm-text-7xl)" }}
                        >
                            Lo que más nos piden
                        </h2>
                        <img src="/src/assets/home/section2/heart.png" alt="♥" className="h-8 sm:h-12 lg:h-16 w-auto" />
                    </div>

                    <ProductGrid>
                        <ProductCard
                            image="/src/assets/home/section2/image1.png"
                            title="Sticker pack Kpop"
                            onClick={() => console.log("Product clicked")}
                        />
                        <ProductCard
                            image="/src/assets/home/section2/image2.png"
                            title="Sleeves holográficos"
                            onClick={() => console.log("Product clicked")}
                        />
                        <ProductCard
                            image="/src/assets/home/section2/image3.png"
                            title="Stickers de vinil para decorar"
                            onClick={() => console.log("Product clicked")}
                        />
                        <ProductCard
                            image="/src/assets/home/section2/image4.png"
                            title="Merch original de Sanrio"
                            onClick={() => console.log("Product clicked")}
                        />
                    </ProductGrid>
                </div>
            </section>

            {/* About Section with Curve */}
            <CurvedSection
                backgroundColor="#FFB8CB"
                curveColor="#FFF"
                curvePosition="top"
                className="min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center"
            >
                <div className="bm-container py-8 sm:py-12">
                    <div className="text-start">
                        <h2 className="text-white font-sanggar" style={{ fontSize: "var(--bm-text-6xl)" }}>
                            ¡Hola! Somos Cat y Marce, las <br className="hidden sm:block" /> fundadoras de Banana Milk.
                        </h2>
                        <div className="text-[#FFDEE7] font-winkle mt-4 space-y-4" style={{ fontSize: "var(--bm-text-2xl)" }}>
                            <p>
                                Nuestra historia inicio en 2018, cuando el amor por el Kpop especialmente por el grupo iKON nos unio a
                                pesar de vivir en diferentes estados Tampico Tamaulipas y Durango Dgo. Con el tiempo nuestra amistad se
                                fortalecio y en 2020, decidimos convertir nuestro hobby compartido en una aventura llamada Banana Milk.
                            </p>
                            <p>
                                En Banana Milk, nos encanta ofrecerte todo lo que puedas imaginar en el mundo del Kpop, anime, manhwas y
                                otras cositas cute, desde albumes, photocards originales y obvio fanmade, papeleria, mercancia original,
                                y todo tipo de productos de nuestras bonitas ilustraciones hemos reunido una amplia variedad de tesoros
                                que sabemos que te encantaran.
                            </p>
                            <p>
                                Gracias por ser parte de esta aventura con nosotras. Esperamos que disfrutes tanto como nosotras este
                                viaje lleno de K-pop, anime y creatividad!
                            </p>
                        </div>
                    </div>
                    <div className="text-end mt-6 sm:mt-8">
                        <Button variant="primary" size="md">
                            Sobre nosotras
                        </Button>
                    </div>
                </div>
            </CurvedSection>

            {/* Locations Section */}
            <section
                className="bm-section relative bg-cover bg-center"
                style={{ backgroundImage: "url(/src/assets/home/section4/bg4-2.svg)" }}
            >
                <div className="bm-container">
                    <div className="text-center">
                        <h2 className="text-white font-winkle" style={{ fontSize: "var(--bm-text-6xl)" }}>
                            Productos para entrega inmediata en:
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 mt-8 sm:mt-12">
                            {/* Durango */}
                            <div className="relative flex flex-col items-center group cursor-pointer">
                                <img
                                    src="/src/assets/home/section4/durango.svg"
                                    alt="Durango"
                                    className="w-3/4 sm:w-4/5 h-auto transition-opacity duration-200 ease-in-out group-hover:opacity-0"
                                />
                                <img
                                    src="/src/assets/home/section4/hover-durango.svg"
                                    alt="Hover Durango"
                                    className="w-full h-auto absolute inset-0 opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100 -rotate-[15deg]"
                                />
                                <p className="text-white font-winkle mt-4" style={{ fontSize: "var(--bm-text-3xl)" }}>
                                    Durango, Dgo.
                                </p>
                            </div>

                            {/* Tampico */}
                            <div className="relative flex flex-col items-center group cursor-pointer">
                                <img
                                    src="/src/assets/home/section4/tampico.svg"
                                    alt="Tampico"
                                    className="w-3/4 sm:w-4/5 h-auto transition-opacity duration-200 ease-in-out group-hover:opacity-0"
                                />
                                <img
                                    src="/src/assets/home/section4/hover-tampico.svg"
                                    alt="Hover Tampico"
                                    className="w-full h-auto absolute inset-0 opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100 rotate-[13deg]"
                                />
                                <p className="text-white font-winkle mt-4" style={{ fontSize: "var(--bm-text-3xl)" }}>
                                    Tampico, Tamps.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Chai Manzana Section */}
            <CurvedSection
                backgroundColor="#FAF6EF"
                curveColor="#FFF"
                curvePosition="bottom"
                className="min-h-[50vh] sm:min-h-[60vh] lg:min-h-[70vh] flex items-center justify-center"
            >
                <div className="bm-container py-8 sm:py-12">
                    <div className="text-start">
                        <h2 className="text-[#FFB8CB] font-sanggar" style={{ fontSize: "var(--bm-text-6xl)" }}>
                            Te ayudamos con la <br className="hidden sm:block" /> identidad visual de tu marca
                        </h2>
                        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 mt-6 sm:mt-8 items-start">
                            <p className="text-[#FF96B2] font-winkle flex-1" style={{ fontSize: "var(--bm-text-3xl)" }}>
                                Quieres un logo precioso que refleje lo que quieres transmitir y sitios web hermosos como este en donde
                                puedes ofrecer tus productos y servicios?
                            </p>
                            <div className="w-full lg:w-auto">
                                <Button variant="gradient" size="md" className="w-full lg:w-auto whitespace-nowrap">
                                    Comienza a crear tu marca
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </CurvedSection>
        </div>
    )
}
