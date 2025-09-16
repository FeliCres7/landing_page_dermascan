import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">

                <h1 className='h1title'>Dermascan</h1>
                <h2>Detección temprana del melanoma</h2>
                <h3>Protege tu piel con inteligencia artificial. Analiza lunares, evalúa factores de riesgo y recibe consejos personalizados para prevenir el melanoma.</h3>
                <button className='button1'>Descargar App</button>

            </header>

            <div className='div1'>
                <h1>Tecnología al servicio de tu salud</h1>
                <h2>Dermascan utiliza inteligencia artificial para predecir posibles casos de melanoma y lograr una detección temprana del cancer de piel.</h2>
                <div className='divimg'><img className='imgmelanoma' src="/melanoma.png" alt="melanoma" /></div>

                <ul>
                    <li><div className='lidiv1'><img className='imgdiv1' src="/imglupa.png" alt="" /><h3>Inteligencia artificial predictiva</h3></div><p className='pdiv1'>Algoritmos entrenados con miles de imágenes dermatológicas para identificar patrones de riesgo en lunares y manchas de la piel.</p></li>
                    <li><div className='lidiv1'><img className='imgdiv1' src="/imgescudo.png" alt="" /><h3>Prevención y factores de riesgo</h3></div><p className='pdiv1'>Evaluación de factores de riesgo individuales y recomendaciones específicas para tu tipo de piel y estilo de vida.</p></li>
                    <li><div className='lidiv1'><img className='imgdiv1' src="/imgcirculo.png" alt="" /><h3>Detección temprana del melanoma</h3></div><p className='pdiv1'>Predicción de riesgos mediante un algoritmo de alta precisión.</p></li>
                </ul>
            </div>

            <div className='div2'>
                <h1>Todo lo que necesitas en una app</h1>
                <h2 className='h2div2'>Herramientas completas para el cuidado y protección de tu piel, respaldadas por tecnología médica avanzada.</h2>
                <div className='divarribadiv2'><div className='divdiv2'> 
                    <img className='imgdiv2' src="/iconcamara.png" alt="" />
                    <h2>Análisis de lunares con IA</h2>
                    <p>Fotografía tus lunares y recibe un análisis instantáneo de riesgo utilizando algoritmos de deep learning.</p>
                </div>
                <div className='divdiv2'>
                    <img className='imgdiv2' src="/iconstats.png" alt="" />
                    <h2>Evaluación de Factores de Riesgo</h2>
                    <p>Cuestionario completo que evalúa tu historial médico, tipo de piel y exposición solar.</p>
                </div>
                <div className='divdiv2'>
                    <img className='imgdiv2' src="/iconheart.png" alt="" />
                    <h2>Consejos Personalizados</h2>
                    <p>Recomendaciones específicas para el cuidado de tu piel basadas en tu perfil de riesgo</p>
                </div></div>
                <div className='divabajodiv2'><div className='divdiv2'>
                    <img className='imgdiv2' src="/iconidea.png" alt="" />
                    <h2>Tips de prevención</h2>
                    <p>Página con consejos para el cuidado de la piel y la prevención del melanoma</p>
                </div>
                <div className='divdiv2'>
                    <img className='imgdiv2' src="/iconhistory.png" alt="" />
                    <h2>Registro de lunares</h2>
                    <p>Registra y monitorea la evolución de tus lunares a lo largo del tiempo.</p>
                </div></div>
                
            </div>

            <div className='div3'>
                <h1>Cómo funciona DermaScan</h1>
                <h2>En solo tres pasos simples, obtené un análisis completo de riesgo y recomendaciones personalizadas para el cuidado de tu piel.</h2>
                <div className='containerdiv3'>
                <div className='divdiv3'><p className='numdiv3'>1</p><img className='imgdiv3' src="/iconcamara.png" alt="" /><h3>Fotografiá tus Lunares</h3><p className='pdiv3'>Usa la cámara de tu smartphone para capturar imágenes claras de lunares o manchas sospechosas.</p></div>
                <div className='divdiv3'><p className='numdiv3'>2</p><img className='imgdiv3' src="/iconlupaa.png" alt="" /><h3>Análisis con IA</h3><p className='pdiv3'>Nuestra inteligencia artificial analiza la imagen y evalúa patrones de riesgo en segundos.</p></div>
                <div className='divdiv3'><p className='numdiv3'>3</p><img className='imgdiv2' src="/iconcircles.png" alt="" /><h3>Recibe Resultados</h3><p className='pdiv3'>Obtén un reporte detallado con nivel de riesgo y recomendaciones médicas específicas.</p></div>
                </div>

            </div>

            <div className='div4'>
                <h1 className='div4h1'>¿Por Qué es Tan Importante la Detección Temprana?</h1>
                <div className='containerdiv4'>
                <div className='leftdiv4'>
                <h3>El melanoma es la forma más peligrosa de cáncer de piel, pero cuando se detecta tempranamente, tiene una
                    tasa de supervivencia del 99%. La prevención y detección oportuna pueden salvar vidas.</h3>
                <ul className='uldiv4'>
                    <li><img className='imgdiv3' src="/iconcheck.png" alt="" /><p>Principal causa de muerte por cáncer de piel</p></li>
                    <li><img className='imgdiv3' src="/iconcheck.png" alt="" /><p>Mayor incidencia en personas de piel clara</p></li>
                    <li><img className='imgdiv3' src="/iconcheck.png" alt="" /><p>Causado principalmente por exposición UV</p></li>
                    <li><img className='imgdiv3' src="/iconcheck.png" alt="" /><p>99% curable si se detecta tempranamente</p></li>
                </ul>
            </div>
                <div className='rightdiv4'>
                    <div className='divcontdiv4'>
                    <div>
                        <h1 className='titlediv4'>99%</h1>
                        <h3>Tasa de Supervivencia</h3>
                        <p>Cuando se detecta en etapa temprana</p>
                    </div>
                    <div>
                        <h1 className='titlediv4'>1 de 27</h1>
                        <h3>Hombres</h3>
                        <p>Desarrollarán melanoma en su vida</p>
                    </div></div>
                    <div className='divcontdiv4'>
                    <div>
                        <h1 className='titlediv4'>1 de 40</h1>
                        <h3>Mujeres</h3>
                        <p>Desarrollarán melanoma en su vida</p>
                    </div>
                    <div>
                        <h1 className='titlediv4'>90%</h1>
                        <h3>Casos Prevenibles</h3>
                        <p>Con protección solar adecuada</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>


            <div className='div5-6'>
                <div className='div5'>
                <h1>Tu Piel No Puede Esperar</h1>
                <h2>Cada día cuenta cuando se trata de detectar cambios en tu piel. Descarga DermaScan hoy y comienza a proteger
                    tu salud con la tecnología más avanzada.</h2>
                    <div className='buttonsdiv5'><button className='buttonandroid'><img className='imgbtn'  src="/icongoogleplay.png" alt="" /><p>Descargar para Android</p></button>
                <button className='buttonios'><img className='imgbtn' src="/iconapple.png" alt="" /><p>Descargar para iOS</p></button></div>
                
                <div className='divsdiv5'>
                    <div className='divdiv5'>
                        <img className='imgdiv3' src="/iconcheck.png" alt="" />
                        <h3>Análisis instantáneo</h3>
                        <p>Resultados en segundos</p>
                    </div>
                    <div className='divdiv5'>
                        <img className='imgdiv3' src="/iconcheck.png" alt="" />
                        <h3>Alta precisión</h3>
                        <p>Modelo IA con alta predictibilidad</p>
                    </div>
                    <div className='divdiv5'>
                        <img className='imgdiv3' src="/iconcheck.png" alt="" />
                        <h3>Consejos por profesionales</h3>
                        <p>Múltiples consejos para el cuidado de la piel</p>
                    </div>
                </div>
            </div>


            <div className='div6'>
                <h1>Preguntas frecuentes</h1>
                <ul>
                    <li>
                        <h3>¿Qué es DermaScan?</h3>
                        <p>DermaScan es una aplicación con Inteligencia Artificial diseñada para la prevención y el cuidado de
                            la piel, con un enfoque en la detección temprana del melanoma. La aplicación te permite analizar el
                            riesgo de un lunar, evaluar tus factores de riesgo personales y te brinda consejos para el cuidado
                            de la piel.</p>
                    </li>
                    <li>
                        <h3>¿DermaScan me da un diagnóstico médico?</h3>
                        <p>No. Es muy importante entender que DermaScan
                            no es una herramienta de diagnóstico médico. Su propósito es evaluar el nivel de riesgo de un lunar
                            y, en caso de que este sea alto, te recomendará encarecidamente que acudas a un dermatólogo para
                            obtener un diagnóstico profesional. Solo los profesionales de la salud autorizados pueden emitir
                            diagnósticos médicos.?</p>
                    </li>
                    <li>
                        <h3>¿Qué debo hacer si mi lunar tiene un riesgo alto?</h3>
                        <p>Si la aplicación determina que tu lunar tiene un nivel de riesgo alto, la recomendación es que

                            acudas a un dermatólogo para una evaluación profesional. La detección temprana es clave para un
                            mejor pronóstico, con una tasa de supervivencia que puede alcanzar el 99% en las etapas iniciales.
                        </p>
                    </li>
                </ul>
            </div>
            </div>
            <footer>
                <h3>Dermascan</h3>
                <div className='divfooter'>
                    <a>Sobre nosotros</a>
                    <a>Características</a>
                    <a>Contacto</a>
                    <a>Descargar</a>
                </div>
                <p>© 2024 DermaScan. Detectar a tiempo salva vidas</p>
            </footer>

        </div>
    );
}

export default App;
