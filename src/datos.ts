// Todo el texto del portfolio en un solo lugar, para editarlo fácil

export const PERFIL = {
  nombre: 'Damián Bacque',
  rol: 'Analista funcional y desarrollador full stack jr (.NET + React)',
  zona: 'Lomas de Zamora, Buenos Aires',
  mail: 'damian.bacque235@gmail.com',
  whatsapp: '5491140508919',
  linkedin: 'https://www.linkedin.com/in/damian-bacque/',
  github: 'https://github.com/DamianBacq',
  // CV en PDF dentro de public/. Para cambiarlo, reemplazá ese archivo. Vacío = no se muestra el botón.
  cv: '/cv-damian-bacque.pdf',
}

// Proyecto principal
export const PELU = {
  problema: 'Una peluquería necesitaba que los clientes reservaran solos, que pagaran una seña para asegurar el turno y poder ver cuánto gana por mes.',
  rol: 'Trabajo individual para un cliente real. Relevé los requisitos con el dueño, diseñé la base de datos, desarrollé la API y el frontend, e hice el deploy.',
  solucion: 'Reserva online en 5 pasos con pago de seña por Mercado Pago, mails de confirmación y recordatorio, y un panel donde el peluquero maneja agenda, cobros, bloqueos y gastos.',
  estado: 'Publicado en un entorno de prueba. Se entrega con las cuentas reales del cliente.',
  stack: ['C# / .NET 10', 'ASP.NET Core Web API', 'PostgreSQL', 'React + TypeScript', 'Mercado Pago', 'JWT', 'Docker'],
  reglas: [
    'Un turno por hora, de martes a sábado; se reserva hasta una semana antes.',
    'Seña de $5.000 que se descuenta del total, o pago total online.',
    'Si la seña no se paga en 15 minutos, el turno se libera solo.',
    'El cliente cancela hasta 3 horas antes y se le devuelve lo pagado.',
    'Si no se presenta, pierde la seña.',
    'Los pagos en efectivo también se registran, para calcular la ganancia del mes.',
  ],
  tablas: [
    { nombre: 'Turno', campos: ['id', 'cliente_id', 'servicio_id', 'fecha_hora', 'precio', 'estado', 'codigo_cancelacion', 'cancelado_por'] },
    { nombre: 'Pago', campos: ['id', 'turno_id', 'monto', 'tipo', 'medio', 'estado', 'mp_pago_id'] },
    { nombre: 'Cliente', campos: ['id', 'nombre', 'apellido', 'telefono', 'email'] },
    { nombre: 'Servicio', campos: ['id', 'nombre', 'precio', 'duracion_minutos', 'activo'] },
    { nombre: 'HorarioAtencion', campos: ['id', 'dia_semana', 'hora_desde', 'hora_hasta'] },
    { nombre: 'Bloqueo', campos: ['id', 'fecha_hora_desde', 'fecha_hora_hasta', 'motivo'] },
    { nombre: 'Gasto', campos: ['id', 'descripcion', 'monto', 'fecha'] },
    { nombre: 'Usuario', campos: ['id', 'usuario', 'password_hash'] },
  ],
  capas: [
    { nombre: 'React + TypeScript', texto: 'Reserva, pago, cancelación y panel del peluquero.' },
    { nombre: 'Web API', texto: 'Controladores REST; los del panel piden token JWT.' },
    { nombre: 'Negocio', texto: 'Reglas de turnos, pagos, devoluciones y mails.' },
    { nombre: 'Datos', texto: 'SQL escrito a mano con ADO.NET y Npgsql.' },
    { nombre: 'Entidades', texto: 'Clases del dominio y enums de estados.' },
  ],
  endpoints: [
    'GET  api/Turnos/disponibles',
    'POST api/Turnos',
    'POST api/Turnos/cancelar/{codigo}',
    'POST api/Pagos/preferencia',
    'POST api/Pagos/webhook',
    'POST api/Turnos/{id}/cobrar  [Authorize]',
  ],
  decisiones: [
    { titulo: 'Un pago se procesa una sola vez', texto: 'El webhook y la vuelta del cliente pueden llegar juntos. El pago solo se aprueba si sigue Pendiente, así nunca se confirma dos veces.' },
    { titulo: 'No confiar en el navegador', texto: 'Antes de confirmar un turno siempre se consulta el pago real a Mercado Pago.' },
    { titulo: 'Dos turnos en el mismo horario, imposible', texto: 'Un índice único parcial en PostgreSQL sobre fecha_hora, para los turnos que no están cancelados.' },
    { titulo: 'Hora argentina siempre', texto: 'Se convierte desde UTC con la zona de Buenos Aires: DateTime.Now en el servidor da otra hora.' },
  ],
}

export interface Demo {
  id: string
  nombre: string
  rubro: string
  resumen: string
  color: string
  url?: string
}

export const DEMOS: Demo[] = [
  { id: 'ombu', nombre: 'Ombú', rubro: 'Turnos y tienda', resumen: 'Turnos por profesional y tienda online con un mismo panel para la agenda, los pedidos y los ingresos.', color: '#6F8F78', url: 'https://ombu-zf8g.onrender.com' },
  { id: 'hocico', nombre: 'Hocico', rubro: 'E-commerce', resumen: 'Productos con variantes de precio y stock propios, cupones de descuento y panel de stock bajo.', color: '#E0A400' },
  { id: 'bulon', nombre: 'Bulón', rubro: 'Catálogo técnico', resumen: 'Búsqueda por medida o código, fichas técnicas por producto y carga de varias medidas de una vez.', color: '#C9A100' },
]

// TP integrador de Análisis y Diseño de Sistemas (UAI)
export const ANALISIS = {
  titulo: 'Análisis de un sistema para un restaurante',
  contexto: 'TP integrador de Análisis y Diseño de Sistemas, en equipo. Después de la devolución del profesor rehicimos el trabajo desde el propósito y la descripción del negocio.',
  requisitos: ['Generación de reserva', 'Gestión de mesa y pedido en local', 'Delivery y chequeo de estado'],
  entregables: ['Descripción del negocio', 'Requisitos funcionales y no funcionales', 'Casos de uso con su especificación (4 a 5 por requisito)', 'Diagrama de clases UML'],
}

// Cada habilidad principal con dónde la usé, para que se pueda comprobar
export const HABILIDADES = [
  { nombre: 'C# y .NET', donde: 'API en capas con POO en Pelu Barber y en los TPs de la facu.' },
  { nombre: 'SQL y PostgreSQL', donde: 'Modelo de datos, SQL escrito a mano, índices y restricciones.' },
  { nombre: 'React y TypeScript', donde: 'Frontend de Pelu Barber y de las tres demos, mobile first.' },
  { nombre: 'Análisis funcional', donde: 'Relevamiento, reglas de negocio, casos de uso y UML.' },
]

export const IDIOMAS = 'Español nativo, inglés avanzado (fluido).'

export const TAMBIEN = ['Git y GitHub', 'Docker', 'APIs REST', 'JWT', 'Mercado Pago', 'HTML y CSS', 'Visual Studio']

export const RECORRIDO = [
  { cuando: '2026 – hoy', que: 'Desarrollador freelance', donde: 'Sistemas a medida para comercios: relevamiento con el cliente, desarrollo, deploy y mantenimiento.' },
  { cuando: '2025 – hoy', que: 'Ingeniería en Sistemas Informáticos', donde: 'UAI, sede Lomas de Zamora. Cursando 2º año.' },
]
