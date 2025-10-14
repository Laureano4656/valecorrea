import React, { FunctionComponent, useEffect, useState } from 'react'
import NavBar from '../home/nav-bar'
import Footer from '../footer'
import Separator from '../ui/separator'
import styles from './styles/sobre-mi.module.css'
import imagenMy from '../../static/images/foto Sobre Mi.png'
import Image from 'next/image'
import { BASE_URL } from '../../helpers/env'
import axios from 'axios'

const SobreMi: FunctionComponent = () => {
	const [loading, setLoading] = useState(true)

	const [sections, setSections] = useState({
		soy: '',
		conviccion: '',
		forjando: '',
		herramientas: '',
		hoy: ''
	})

	useEffect(() => {
		setLoading(false)
		axios.get(`${BASE_URL}/notes/aboutMeNote`).then(response => {
			const data = response.data.comment
			const regex = /<h3[^>]*>([\s\S]*?)<\/h3>\s*<p[^>]*>([\s\S]*?)<\/p>/g

			// 2. Usa matchAll para encontrar todas las coincidencias y conviértelo a un array
			const matches = Array.from(data.matchAll(regex))

			// 3. Crea un objeto para guardar los resultados limpios
			const extractedData = {}

			// 4. Recorre las coincidencias y arma el objeto
			for (const match of matches) {
				// El título está en el primer grupo de captura (match[1])
				// El párrafo está en el segundo grupo de captura (match[2])

				// .trim() limpia los espacios y saltos de línea al inicio y final
				const title = match[1].trim().toLowerCase().replace(' ', '_') // Clave limpia: "forjando_el_camino"
				const content = match[2].trim()

				// Asigna el contenido al objeto usando el título como clave
				extractedData[title] = content
			}
			console.log(extractedData)
			// Actualiza el estado con los valores extraídos o cadenas vacías si no se encuentran
			setSections({
				soy: extractedData['soy'] || '',
				conviccion: extractedData["convicción{'_'}"] || '',
				forjando: extractedData['forjando_el camino'] || '',
				herramientas: extractedData["herramientas{'_'}"] || '',
				hoy: extractedData['hoy'] || ''
			})
			console.log(sections)
			setLoading(false)
		})
	}, [])

	return (
		<>
			<NavBar />

			<div
				className={
					'relative text-justify  flex md:w-[66.5vw] w-11/12 mx-auto flex-col justify-between gap-8 pb-12 pt-16 sm:pt-0'
				}
			>
				<Image
					src={imagenMy}
					alt='imagen'
					width={0}
					height={0}
					className='min-w-[200px] min-h-[200px]  w-[15vw] h-[15vw] object-cover rounded-[100%] mx-auto'
					style={{ objectPosition: '70%' }}
				/>

				<h1 className='text-center text-titles'>VALERIA CORREA</h1>
				<h2 className='text-center text-subtitles'>
					LA POTENCIA DE LO COLECTIVO ES INFINITA
				</h2>
				<h3 className='font-playfairExtraBold md:text-[1.5vw] text-list_heading mt-12 '>
					Soy
				</h3>
				<p className='text-left font-playfair text-text sm:text-justify'>
					{sections.soy || ''}
				</p>
				<h3 className='font-playfairExtraBold md:text-[1.5vw] text-list_heading  '>
					Convicción{' '}
				</h3>
				<p className='text-left font-playfair text-text sm:text-justify'>
					{sections.conviccion || ''}
				</p>
				<h3 className='font-playfairExtraBold md:text-[1.5vw] text-list_heading  '>
					Forjando el camino
				</h3>
				<p className='text-left font-playfair text-text sm:text-justify'>
					{sections.forjando || ''}
				</p>
				<h3 className='font-playfairExtraBold md:text-[1.5vw] text-list_heading  '>
					Herramientas{' '}
				</h3>
				<p className='text-left font-playfair text-text sm:text-justify'>
					{sections.herramientas || ''}
				</p>
				<h3 className='font-playfairExtraBold md:text-[1.5vw] text-list_heading  '>
					Hoy
				</h3>
				<p className='text-left font-playfair text-text sm:text-justify'>
					{sections.hoy || ''}
				</p>
				{/* <div className={styles.header}>
          <div className="relative flex items-center justify-center h-full w-max ">
            <h1
              className={`${styles.title} w-full text-[4.6vw] py-16 text-center font-playfair font-normal`}
            >
              valeria
              <br /> correa
            </h1>
          </div>
          <div
            style={{ height: "calc(100vh - 8.2vw)" }}
            className="relative flex items-center justify-center w-full overflow-hidden"
          >
            <div
              className={`${styles.backGroundSobremi}  w-full h-full absolute `}
            ></div>
          </div>
        </div> */}
			</div>
			{/* <p className="w-full max-w-[60.2vw]  text-text text-justify mx-auto  pb-16 font-playfair">
        Soy Vale Correa, nací en Mar del Plata en los años ´80 y me considero
        una persona muy curiosa y creativa, con profundos intereses en el
        estudio y la investigación.
        <br />
        <br />
        Durante mi carrera formal dediqué toda mi energía a formarme como
        Abogada en la Universidad Pública, abocándome en forma exclusiva al
        Derecho de la Salud, una novel pero consolidada rama jurídica, que me
        abrió las puertas de la labor en equipo a nivel local y nacional. De la
        mano de grandes -y muy generosas- referentes, tuve la oportunidad de
        organizar y participar en <br />
        Congresos, paneles y disertaciones en diferentes provincias argentinas,
        junto a un grupo humano maravilloso, en un intercambio de experiencias
        del cual, aún hoy, me sigo nutriendo profundamente.
        <br />
        <br />
        Como Especialista en Derecho Penal, logré durante cuatro años generar
        los conocimientos necesarios para conectar todos los puntos y entender
        que mi máximo potencial como profesional se genera a partir de la
        integración de aquellas disciplinas que trabajan muy cerca <br />
        de las personas, en contacto directo con su historia, sus tensiones, sus
        problemáticas.
        <br /> Más, anhelaba entender mejor como funcionamos, de modo que,
        cuando tuve el espacio, me zambullí de pleno en la Licenciatura en
        Psicología, carrera que me encuentro cursando y que produjo el
        equilibrio que mi recorrido necesitaba. <br /> <br />
        Algunas herramientas adquiridas me comprometen de forma especial: ser en
        Docente de Derecho, e Instructora de Yoga en países como Cuba y México
        canalizan mi entusiasmo por compartir, y sintetizar todos los ámbitos
        del desarrollo humano. <br />
        <br />
        Trabajé y sigo trabajando a diario con una visión: hacer un aporte de
        valor que refuerce la conciencia personal y comunitaria, para con
        nuestro Ser y para con el Planeta.
        <br /> Desde el año 2002 me encontrás siempre trabajando para el
        Servicio de Justicia Federal de miciudad.
        <br />
        <br />
        En mi expresión intento ejercitarme con frecuencia en el uso la X, la E,
        @ o #, entre otras marcaslingüísticas que contribuyen a construir
        BRANDIGmodos mas auténticos de narrarnos. Porque aun creo que las cosas
        pueden cambiar.
      </p> */}
			<ul>
				<li></li>
			</ul>
			<Footer />
		</>
	)
}

export default SobreMi
