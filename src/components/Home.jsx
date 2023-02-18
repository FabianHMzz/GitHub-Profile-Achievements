const Home = () => {
  return(
    <section>
    <div className='flex items-center flex-col justify-center gap-4'>
      <img src="/achievements.webp" alt="Github Achievements" className='w-[1100px]' />
      <h1 className='font-extrabold text-4xl font-sans'>Logros de GitHub</h1>
    </div>
    <div className="pt-10 px-6">
        <h2 className='font-bold font-sans text-xl'>¿Qué son los logros de GitHub?</h2>
        <p className='font-base font-sans p-2'>Los logros fueron anunciados oficialmente el día 9 de junio del 2022 por medio de las redes oficiales de GitHub. Ya existian 3 variantes de estos que eran "Arctic Code Vault", "GitHub Sponsor y "Mars Helicopter 2020"</p>
        <p className='font-base font-sans p-2'>Estos logros antes mencionados solo se podían conseguir en un determinado tiempo, para ser exactos en el año 2020 se podía participar para poderlos conseguir y, en pocas palabras, estos logros son exclusivos. A excepción del de GitHub Sponsors.</p>
    </div>
    </section>
  )
}

export default Home
