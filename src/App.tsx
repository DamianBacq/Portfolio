import { useState } from 'react'
import { ANALISIS, DEMOS, HABILIDADES, IDIOMAS, PELU, PERFIL, RECORRIDO, TAMBIEN } from './datos'

// Inclina la compu y el celular según dónde está el mouse
function inclinar(e: React.MouseEvent<HTMLDivElement>) {
  const c = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--ry', `${((e.clientX - c.left) / c.width - 0.5) * 10}deg`)
  e.currentTarget.style.setProperty('--rx', `${((e.clientY - c.top) / c.height - 0.5) * -8}deg`)
}

export default function App() {
  const [copiado, setCopiado] = useState(false)

  function copiarMail() {
    navigator.clipboard?.writeText(PERFIL.mail).then(() => {
      setCopiado(true)
      setTimeout(() => setCopiado(false), 2000)
    }).catch(() => {})
  }

  const contactos = (
    <div className="acciones">
      <a className="boton" href={`mailto:${PERFIL.mail}`}>Escribime</a>
      <a className="boton secundario" href={PERFIL.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      <a className="boton secundario" href={PERFIL.github} target="_blank" rel="noreferrer">GitHub</a>
      {PERFIL.cv && <a className="boton secundario" href={PERFIL.cv} download>Descargar CV</a>}
    </div>
  )

  return (
    <>
      <header className="cabecera">
        <a className="marca" href="#arriba">Damián Bacque</a>
        <nav aria-label="Secciones">
          <a href="#proyecto">Proyecto</a>
          <a href="#mas">Más trabajos</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <main id="arriba">
        <section className="portada">
          <div className="portada-texto">
            <h1><mark>Damián Bacque</mark></h1>
            <p className="rol">{PERFIL.rol}</p>
            <p className="bajada">
              Desarrollé de punta a punta un sistema de turnos y pagos para un cliente real: relevamiento con el dueño,
              base de datos, API en .NET, frontend en React y deploy.
            </p>
            {contactos}
            <p className="mail-visible">{PERFIL.mail}</p>
          </div>
          <div className="ficha">
            <img src="/img/dami.jpg" alt="Damián Bacque" />
            <dl>
              <div><dt>Busco</dt><dd>Mi primer trabajo en IT como analista funcional o desarrollador jr</dd></div>
              <div><dt>Estudio</dt><dd>Ingeniería en Sistemas Informáticos, UAI (2º año)</dd></div>
              <div><dt>Vivo en</dt><dd>{PERFIL.zona}</dd></div>
              <div><dt>Idiomas</dt><dd>Español nativo, inglés avanzado</dd></div>
            </dl>
          </div>
        </section>

        <section id="proyecto" className="caso" aria-labelledby="titulo-caso">
          <div className="caso-cabeza">
            <h2 id="titulo-caso">Pelu Barber</h2>
            <p className="caso-sub">Sistema de turnos y pagos para una peluquería</p>
            <dl className="resumen">
              <div><dt>El problema</dt><dd>{PELU.problema}</dd></div>
              <div><dt>Mi rol</dt><dd>{PELU.rol}</dd></div>
              <div><dt>La solución</dt><dd>{PELU.solucion}</dd></div>
              <div><dt>Estado</dt><dd>{PELU.estado}</dd></div>
            </dl>
            <ul className="chips">{PELU.stack.map((s) => <li key={s}>{s}</li>)}</ul>
            <p className="nota">El código es del cliente y el repositorio es privado. Lo recorro con gusto en una entrevista.</p>
          </div>
          <div className="dispositivos" onMouseMove={inclinar}>
            <div className="pantalla"><img src="/proyectos/pelu-pc.jpg" alt="Pelu Barber en computadora" /></div>
            <div className="telefono"><img src="/proyectos/pelu-cel.jpg" alt="Pelu Barber en celular" /></div>
          </div>

          <details className="detalle">
            <summary>Ver cómo lo hice: reglas, modelo de datos, arquitectura y decisiones</summary>
            <ol className="etapas">
              <li className="etapa">
                <div className="etapa-titulo">
                  <h3>Relevamiento</h3>
                  <p>Las reglas de negocio que acordé con el dueño y que guiaron todo el desarrollo.</p>
                </div>
                <ul className="reglas">{PELU.reglas.map((r) => <li key={r}>{r}</li>)}</ul>
              </li>

              <li className="etapa">
                <div className="etapa-titulo">
                  <h3>Modelo de datos</h3>
                  <p>Ocho tablas en PostgreSQL. El precio se copia al turno al reservar, así un aumento no cambia los turnos ya tomados. En amarillo, las claves foráneas.</p>
                </div>
                <div className="tablas">
                  {PELU.tablas.map((t) => (
                    <div key={t.nombre} className="tabla">
                      <p className="tabla-nombre">{t.nombre}</p>
                      <ul>{t.campos.map((c) => <li key={c} className={['cliente_id', 'servicio_id', 'turno_id'].includes(c) ? 'fk' : ''}>{c}</li>)}</ul>
                    </div>
                  ))}
                </div>
              </li>

              <li className="etapa">
                <div className="etapa-titulo">
                  <h3>Arquitectura</h3>
                  <p>Solución en capas con POO: cada capa usa solo la de abajo. En producción el servidor .NET también sirve el frontend, en una sola imagen Docker.</p>
                </div>
                <div className="arquitectura">
                  <ol className="capas">
                    {PELU.capas.map((c) => (
                      <li key={c.nombre}><strong>{c.nombre}</strong><span>{c.texto}</span></li>
                    ))}
                  </ol>
                  <pre className="endpoints"><code>{PELU.endpoints.join('\n')}</code></pre>
                </div>
              </li>

              <li className="etapa">
                <div className="etapa-titulo">
                  <h3>Decisiones técnicas</h3>
                  <p>Los problemas que más me hicieron pensar y cómo los resolví.</p>
                </div>
                <dl className="decisiones">
                  {PELU.decisiones.map((d) => (
                    <div key={d.titulo}><dt>{d.titulo}</dt><dd>{d.texto}</dd></div>
                  ))}
                </dl>
              </li>
            </ol>
          </details>
        </section>

        <section id="mas" className="mas" aria-labelledby="titulo-mas">
          <h2 id="titulo-mas">Más trabajos</h2>

          <div className="analisis">
            <div>
              <h3>{ANALISIS.titulo}</h3>
              <p className="demo-rubro">Análisis funcional, UAI</p>
            </div>
            <div className="analisis-texto">
              <p>{ANALISIS.contexto}</p>
              <div className="analisis-columnas">
                <div>
                  <p className="mini-titulo">Requisitos clave</p>
                  <ul className="lista">{ANALISIS.requisitos.map((r) => <li key={r}>{r}</li>)}</ul>
                </div>
                <div>
                  <p className="mini-titulo">Entregables</p>
                  <ul className="lista">{ANALISIS.entregables.map((e) => <li key={e}>{e}</li>)}</ul>
                </div>
              </div>
            </div>
          </div>

          <p className="demos-intro">Tres demos propias con la misma base técnica que Pelu Barber, cada una para un rubro distinto.</p>
          <div className="demos-lista">
            {DEMOS.map((d) => (
              <article key={d.id} className="demo" style={{ '--color': d.color } as React.CSSProperties}>
                <div className="dispositivos chico" onMouseMove={inclinar}>
                  <div className="pantalla"><img src={`/proyectos/${d.id}-pc.jpg`} alt={`${d.nombre} en computadora`} /></div>
                  <div className="telefono"><img src={`/proyectos/${d.id}-cel.jpg`} alt={`${d.nombre} en celular`} /></div>
                </div>
                <h3>{d.nombre}</h3>
                <p className="demo-rubro">{d.rubro}</p>
                <p>{d.resumen}</p>
                {d.url && (
                  <p className="demo-link">
                    <a className="boton" href={d.url} target="_blank" rel="noreferrer">Probar la demo</a>
                    <span>Panel: admin / ombu2026. La primera carga puede tardar un minuto.</span>
                  </p>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="habilidades" className="habilidades" aria-labelledby="titulo-habilidades">
          <h2 id="titulo-habilidades">Habilidades</h2>
          <dl className="principales">
            {HABILIDADES.map((h) => (
              <div key={h.nombre}><dt>{h.nombre}</dt><dd>{h.donde}</dd></div>
            ))}
          </dl>
          <p className="tambien"><strong>También uso:</strong> {TAMBIEN.join(', ')}.</p>
          <p className="tambien"><strong>Idiomas:</strong> {IDIOMAS}</p>

          <h2 className="recorrido-titulo">Recorrido</h2>
          <dl className="recorrido">
            {RECORRIDO.map((r) => (
              <div key={r.que}>
                <dt>{r.cuando}</dt>
                <dd><strong>{r.que}</strong>{r.donde}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="contacto" className="contacto" aria-labelledby="titulo-contacto">
          <h2 id="titulo-contacto">¿Hablamos?</h2>
          <p>Si tenés una búsqueda donde pueda sumar, escribime.</p>
          <a className="mail" href={`mailto:${PERFIL.mail}`}>{PERFIL.mail}</a>
          <div className="acciones">
            <button className="boton" onClick={copiarMail}>{copiado ? 'Mail copiado' : 'Copiar el mail'}</button>
            <a className="boton secundario" href={PERFIL.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="boton secundario" href={PERFIL.github} target="_blank" rel="noreferrer">GitHub</a>
            <a className="boton secundario" href={`https://wa.me/${PERFIL.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp</a>
            <a className="boton secundario" href={PERFIL.cv} download>Descargar CV</a>
          </div>
        </section>
      </main>

      <footer className="pie">
        <p>Damián Bacque, {new Date().getFullYear()}.</p>
      </footer>
    </>
  )
}
