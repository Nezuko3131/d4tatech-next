import { getProyectos, getSoluciones, getSobreMi } from '@/lib/sanity'

export const dynamic = 'force-dynamic'

async function getData() {
  const [proyectos, soluciones, sobreMi] = await Promise.all([
    getProyectos(),
    getSoluciones(),
    getSobreMi()
  ])
  return { proyectos, soluciones, sobreMi }
}

export default async function Home() {
  const { proyectos, soluciones, sobreMi } = await getData()

  return (
    <main className="min-h-screen bg-[#080808] text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-[5%] py-4 flex justify-between items-center bg-[rgba(8,8,8,0.95)] border-b border-[#444]">
        <a href="/" className="text-xl font-bold tracking-tight font-mono">D4taTech</a>
        <nav className="hidden md:flex gap-8">
          <a href="#proyectos" className="text-[#bbb] hover:text-white transition-colors">Proyectos</a>
          <a href="#soluciones" className="text-[#bbb] hover:text-white transition-colors">Soluciones</a>
          <a href="#sobre-mi" className="text-[#bbb] hover:text-white transition-colors">Sobre Mí</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-[5%]">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {sobreMi?.titulo || 'BI & Big Data Analytics'}
          </h1>
          <p className="text-xl text-[#bbb] mb-8 max-w-2xl">
            {sobreMi?.descripcion || 'Transformamos datos en decisiones estratégicas con soluciones de Business Intelligence y Big Data personalizadas.'}
          </p>
          <a href="#soluciones" className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-[#e0e0e0] transition-colors">
            Ver Soluciones
          </a>
        </div>
      </section>

      {/* Sobre Mi Section */}
      {sobreMi && (
        <section id="sobre-mi" className="py-20 px-[5%] bg-[#0c0c0c]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Sobre Mí</h2>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {sobreMi.imagen && (
                <div className="w-32 h-32 bg-[#222] rounded-lg flex-shrink-0 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="" alt={sobreMi.nombre} className="w-full h-full object-cover" />
                </div>
              )}
              <div>
                <h3 className="text-xl font-semibold mb-2">{sobreMi.nombre || 'Tu Nombre'}</h3>
                <p className="text-[#bbb] mb-4">{sobreMi.titulo || 'Data Analyst & Developer'}</p>
                <p className="text-[#aaa] mb-4">{sobreMi.descripcion}</p>
                <div className="flex gap-4">
                  {sobreMi.github && (
                    <a href={sobreMi.github} target="_blank" rel="noopener noreferrer" className="text-[#888] hover:text-white">
                      GitHub
                    </a>
                  )}
                  {sobreMi.linkedin && (
                    <a href={sobreMi.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#888] hover:text-white">
                      LinkedIn
                    </a>
                  )}
                  {sobreMi.email && (
                    <a href={`mailto:${sobreMi.email}`} className="text-[#888] hover:text-white">
                      Email
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Soluciones Section */}
      <section id="soluciones" className="py-20 px-[5%]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Soluciones</h2>
          {soluciones.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {soluciones.map((solucion: any) => (
                <div key={solucion._id} className="bg-[#0c0c0c] border border-[#333] rounded-lg p-6 hover:border-[#555] transition-colors">
                  <div className="text-3xl mb-4">{solucion.icono || '💡'}</div>
                  <h3 className="text-lg font-semibold mb-2">{solucion.titulo}</h3>
                  <p className="text-[#aaa] text-sm">{solucion.descripcion}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-[#666]">Añade soluciones desde Sanity Studio</p>
          )}
        </div>
      </section>

      {/* Proyectos Section */}
      <section id="proyectos" className="py-20 px-[5%] bg-[#0c0c0c]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Proyectos</h2>
          {proyectos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {proyectos.map((proyecto: any) => (
                <a
                  key={proyecto._id}
                  href={proyecto.enlace || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[#111] border border-[#333] rounded-lg overflow-hidden hover:border-[#555] transition-colors group"
                >
                  {proyecto.imagen && (
                    <div className="aspect-video bg-[#1a1a1a] overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="" alt={proyecto.titulo} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    </div>
                  )}
                  <div className="p-5">
                    <h3 className="text-lg font-semibold mb-2">{proyecto.titulo}</h3>
                    <p className="text-[#aaa] text-sm mb-3 line-clamp-2">{proyecto.descripcion}</p>
                    {proyecto.tecnologias && proyecto.tecnologias.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {proyecto.tecnologias.slice(0, 4).map((tech: string, i: number) => (
                          <span key={i} className="text-xs px-2 py-1 bg-[#222] rounded text-[#888]">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <p className="text-[#666]">Añade proyectos desde Sanity Studio</p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-[5%] border-t border-[#333] text-center text-[#666] text-sm">
        <p>© {new Date().getFullYear()} D4taTech. Todos los derechos reservados.</p>
      </footer>
    </main>
  )
}
