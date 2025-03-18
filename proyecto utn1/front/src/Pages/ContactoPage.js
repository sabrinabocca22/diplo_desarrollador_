
const ContactoPage = (props) => {
    return (
    <main className="holder contacto">
    <div>
        <h2>Contacto rapido</h2>
        <form className="formulario" action=""
        method="">
            <p>
                <label for="nombre">Nombre</label>
                <input type="text" />
            </p>
            <p>
                <label for="nombre">Email</label>
                <input type="text" />
            </p>
            <p>
                <label for="nombre">Telefono</label>
                <input type="text" />
            </p>
            <p>
                <label for="nombre">Mensaje</label>
                <textarea></textarea>
            </p>
            <p className="acciones"><input type="submit" value="Enviar" /></p>

        </form>
            </div>
            <div className="datos">
                <h2>Otras vias de comunicacion</h2>
                <p>Tambien puede contactarse con nosotros usando los siguientes medios</p>
                <ul>
                    <li>Telefono: 43242388</li>
                    <li>Email:contacto@transportex.com.ar</li>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Skype</li>
                </ul>
                </div>
    </main>
    )
      }


export default ContactoPage;