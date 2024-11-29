"use client"

export default function LaFamaPage() {
  return (
    <div className="min-h-screen bg-[#9fa199] p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header Section */}
        <div className="text-center space-y-2">
          <h1 className="text-[#0047AB] text-4xl md:text-6xl font-bold">
            La Fama
          </h1>
          <h2 className="text-[#0047AB] text-2xl md:text-4xl font-semibold">
            Perfiles y Herrajes
          </h2>
          <p className="text-[#0047AB] text-sm md:text-base">
            Justo C. Díaz #164 col. La Fama, Sta. Catarina N.L. Cel. 8123539366 / Tel. 81 83 36 24 28 / 8121 69 2429
          </p>
          <p className="text-[#0047AB] text-sm md:text-base">
            perfilesyherrajeslafama@hotmail.com
          </p>
        </div>

        {/* Tools Section */}
        <div className="space-y-4">
          <h3 className="text-[#0047AB] text-xl md:text-2xl font-semibold text-center">
            Herramientas disponibles:
          </h3>
          
          <select className="w-full p-2 bg-black text-white rounded-md">
            <optgroup label="Perfiles">
              <option value="angulo-liso">ANGULO LISO</option>
              <option value="angulo-mosquitero">ANGULO MOSQUITERO</option>
              <option value="chambrana">CHAMBRANA</option>
              <option value="chambrana-tapada">CHAMBRANA TAPADA</option>
              <option value="angulo-ranurado">ANGULO RANURADO</option>
              <option value="marco-guia">MARCO GUIA</option>
              <option value="pasamos-20">PASAMOS CAL. 20</option>
              <option value="pasamos-18">PASAMANOS CAL. 18</option>
              <option value="niel-ventana">NIEL VENTANA</option>
              <option value="t-doble">T DOBLE</option>
              <option value="t-sencilla">T SENCILLA</option>
              <option value="vagueta">VAGUETA</option>
              <option value="zeta-20">ZETA CAL. 20</option>
              <option value="zeta-18">ZETA CAL. 18</option>
            </optgroup>

            <optgroup label="Cuadrados">
              <option value="1/2-18">1/2" CAL. 18</option>
              <option value="3/4-18">3/4" CAL. 18</option>
              <option value="3/4-14">3/4" CAL. 14</option>
              <option value="1-20">1" CAL. 20</option>
              <option value="1-18">1" CAL. 18</option>
              <option value="1-16">1" CAL. 16</option>
              <option value="1-14">1" CAL. 14</option>
              <option value="1-1/4-20">1 1/4" CAL. 20</option>
              <option value="1-1/4-18">1 1/4" CAL. 18</option>
              <option value="1-1/4-16">1 1/4" CAL. 16</option>
              <option value="1-1/4-14">1 1/4" CAL. 14</option>
              <option value="1-1/2-20">1 1/2" CAL. 20</option>
              <option value="1-1/2-18">1 1/2" CAL. 18</option>
              <option value="1-1/2-16">1 1/2" CAL. 16</option>
              <option value="1-1/2-14">1 1/2" CAL. 14</option>
              <option value="2-18">2" CAL. 18</option>
              <option value="2-14">2" CAL. 14</option>
            </optgroup>

            <optgroup label="Marcos">
              <option value="economico">ECONOMICO</option>
              <option value="sencillo">SENCILLO</option>
              <option value="doble">DOBLE</option>
            </optgroup>

            <optgroup label="Cajas">
              <option value="cal-20">CAL. 20</option>
              <option value="1">1"</option>
              <option value="1-1/2">1 1/2"</option>
              <option value="2">2"</option>
              <option value="2-1/2">2 1/2"</option>
              <option value="3">3"</option>
              <option value="4">4"</option>
              <option value="k-300">K-300</option>
            </optgroup>
          </select>
        </div>
      </div>
    </div>
  )
}

