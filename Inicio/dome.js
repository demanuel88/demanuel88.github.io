/*
 *
 * @licstart  The following is the entire license notice for the 
 *  JavaScript code in this page.
 *
 * Copyright (C) 2018 Jaume Fuster i Claris
 *
 *
 * The JavaScript code in this page is free software: you can
 * redistribute it and/or modify it under the terms of the GNU
 * General Public License (GNU GPL) as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option)
 * any later version.  The code is distributed WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.
 *
 * As additional permission under GNU GPL version 3 section 7, you
 * may distribute non-source (e.g., minimized or compacted) forms of
 * that code without the copy of the GNU GPL normally required by
 * section 4, provided you include this license notice and a URL
 * through which recipients can access the Corresponding Source.
 *
 * @licend  The above is the entire license notice
 * for the JavaScript code in this page.
 *
 */

// "Thus, programs must be written for people to read, and only incidentally for machines to execute."
// TODO: Commenting.


// ---------- CONFIGURATION ----------

// div.innerHTML : {a.innerHTML : a.href}
var sites = {
				"Munic.de Gral. Pueyrredon": {
					"Deuda ABL/TSU (nro.cuenta)" 			: "http://appsvr.mardelplata.gob.ar/Consultas/ConsuCta/Index.asp",
					"Deuda ABL/TSU (nom.catastral)" 		: "http://appsvr.mardelplata.gob.ar/consultas/login/index.asp?URL=/Consultas/ConsuNom/ConsultaNom.asp", 
					"Ventanilla Unica"						: "http://mardelplata.gob.ar/vu", 
					"Cambio de Dominio"						: "https://ssl.mardelplata.gov.ar/consultas/SSL/cf/loginRedirect.asp?url=/Consultas/CambioTitularidad/index.asp", 
					"Imprimir Tasa ABL/TSU" 				: "http://appsvr.mardelplata.gob.ar/Consultas/reliquidaCtaCte/Index.asp", 
					"Liq. Pago Anual" 						: "http://appsvr.mardelplata.gob.ar/consultas/pagoanual/", 
					"Reimprimir Convenio ABL/TSU" 			: "http://appsvr.mardelplata.gob.ar/Consultas/ConsuCon/", 
					"Reimprimir Convenio ABL/TSU No.Venc" 	: "http://appsvr.mardelplata.gob.ar/Consultas/ConsuConRC/", 
					"Expedientes"							: "http://appsvr.mardelplata.gob.ar/Consultas/Expedientes/exped.asp", 
					"Expedientes Obras Priv." 				: "http://appsvr.mardelplata.gob.ar/consultas/obras/Default.aspx", 
					"Plano COT" 							: "http://appsvr.mardelplata.gob.ar/consultas/cot/index.asp", 
					"Plano Barrios"							: "https://gis.mardelplata.gob.ar/app_mapa_interactivo/planodigital.php?subrubro=15", 
					"Sellados" 								: "http://appsvr.mardelplata.gob.ar/Consultas/SelladosVarios/index.asp", 
					"Reliq.Der.Construcc." 					: "http://appsvr.mardelplata.gob.ar/Consultas/ReliquidaCtaCteDC/index.asp", 
					"Reliq.Conv. Der.Construcc." 			: "http://appsvr.mardelplata.gob.ar/Consultas/ConsuConDC/", 
					"EMVIAL Deuda" 							: "http://appsvr.mardelplata.gob.ar/Consultas/ReliquidaCtaCteEmvial/index.asp", 
					"EMVIAL Deuda Pago Cdo." 				: "http://appsvr.mardelplata.gob.ar/Consultas/ReliquidaCtaCteEmvialContado/index.asp", 
					"GIRSU" 								: "http://appsvr.mardelplata.gob.ar/consultas/ReliquidaCtaCteGIRSU/index.asp", 
					"Nom.Cat" 								: "http://pm.mardelplata.gov.ar/sysworkflow/en-AR/formexterno/1998310264fad0987575121052352916/FormSolicitaAntecedentes.php", 
				},
				"ARBA": {
					"Aviso de Deudas Inmobiliario" 			: "http://www8.arba.gov.ar/AvisoDeudas/?imp=0", 
					"Consulta Informacion Catastral" 		: "http://www8.arba.gov.ar/Informacion/", 
					"Estado del Trámite Catastral" 			: "http://www10.arba.gov.ar/DSISIC/sFiltro/consultaProfesional.do?metodo=consultaProfesional", 
					"Liquidar Deuda Inmobiliario" 			: "https://app.arba.gov.ar/LiqPredet/InicioLiquidacion.do?imp=0&Frame=NO&origen=WEB&url_volver=https%3A%2F%2Fwww%2Earba%2Egov%2Ear%2F", 
					"SIESBA" 								: "http://www10.arba.gov.ar/SIESBA/", 
					"Sistema Información Catastral" 		: "http://www10.arba.gov.ar/DSISIC/", 
					"TGB" 									: "https://sso.arba.gov.ar/Login/login?service=http%3A%2F%2Fwww2.arba.gov.ar%2FTGBienes", 
					"Calculadora TGB" 						: "http://www.colescba.org.ar/www/pages/itgb/indexCalculadoraITGB.jsf", 
					"Normas Legales Catastro" 				: "http://www.arba.gov.ar/Intranet/Legislacion/Catastro/Inicio.htm", 
					"Reclamos Titularidad" 					: "https://www.arba.gov.ar/DPDC/DefensaContribuyenteArba.asp", 
					"Cartografia Digital" 					: "https://www.carto.arba.gov.ar/cartoArba/application", 
				},
				"Obras Sanitarias MGP": {
					"Consulta de Deuda" 				: "https://app2.osmgp.gov.ar/oficinavirtual/tramites-sin-registro/ctacte/deuda", 
					"Oficina Virtual		" 		: "https://app2.osmgp.gov.ar/oficinavirtual/", 
					"Iniciar Tramite"	 			: "https://app2.osmgp.gov.ar/oficinavirtual/tramites/nuevo", 
					"Ver Tramites"		 			: "https://app2.osmgp.gov.ar/oficinavirtual/tramites",
				},
				"ANSES": {
					"Constancia de CUIL" 					: "http://www.anses.gob.ar/constancia-de-cuil/", 
				},
				"AFIP": {
					"Constancia de Inscripción" 			: "https://seti.afip.gob.ar/padron-puc-constancia-internet/ConsultaConstanciaAction.do", 
					"Acceso con Clave Fiscal"				: "https://auth.afip.gob.ar/contribuyente_/login.xhtml",  
				},
				"Reg. Prop. Bs.As.": { 
					"Estado de Tramite" 					: "http://servicios.rpba.gov.ar/estadoTramite/estadoTramite/jsp/index.jsp", 
					"Sitio Restringido" 					: "https://servicios.rpba.gov.ar/RegPropNew/signon/login.do",
					"Formularios" 							: "http://www.rpba.gov.ar/descargas/formulariospublicidad.php", 
					"Digesto" 								: "http://www.rpba.gov.ar/biblioteca/digesto.php",
				},
				"Colegio de Escribanos": {
					"Nómina de Notarios Bs.As." 			: "http://www.colescba.org.ar/www/pages/nomina/indexNomina.jsf", 
					"Webmail Colegio" 						: "http://www.colescba.org.ar/webmail/", 
					"Folios Actuación Notarial Digital" 	: "http://www.colescba.org.ar/actuacionDigital", 
					"Gestion Firma Digital" 				: "http://www.colescba.org.ar/gestionFirmaDigital", 
					"Sitio Restingido Bs.As." 				: "http://www.colescba.org.ar/www/secIndex.html",
					"Solic.Test.Archivo Bs.As." 			: "http://www.colescba.org.ar/www/pages/archivo/segTestimonio/index.jsf", 
					"Legalización Digital"				: "http://www.colescba.org.ar/legalizacionDigital/pages/public/solicitudLegalizacion.jsf",
					"Nomina de Notarios Cap.Fed." 			: "https://publico.colegio-escribanos.org.ar:8445/nominaEscribanos/",
					"Municipios" 							: "http://www.colescba.org.ar/www/static/servicios/municipios.jsf", 
					"Calendario Fiscal" 					: "http://www.colescba.org.ar/portal/recursos/calendario-fiscal.html", 
					"Consulta ReNaPer" 						: "http://www.colescba.org.ar/consultaRenaper/home/index.jsf", 
				},
				"UIF": {
					"Listado de Terroristas" 				: "https://sro.uif.gob.ar/lut/", 
					"Inhabilitados DNI/CUIT" 				: "http://www.colescba.org.ar/ics-wpd/uif/query_uif.htm", 
					"SRO" 									: "https://sro.uif.gob.ar/sro/", 
					"Constancia Inscripción" 				: "https://sro.uif.gob.ar/SRO/Login.aspx?ReturnUrl=%2fsro%2fSujeto%2fConstanciaInscripcion.aspx",
					"Normativa UIF" 						: "https://www.argentina.gob.ar/uif/normativa-uif", 
					"Listado Sujetos Obligados"					: "https://sro.uif.gob.ar/SROAPP/#/consultaRegistracion",
				},
				"Utilidades": {
					"Documentos Cuestionados" : "https://docuest.aaip.gob.ar/index.html", 
					"CPA" : "https://www.correoargentino.com.ar/formularios/cpa", 
					"Exptes. Jurídicas" : "http://tramix.persjuri.gba.gov.ar:8080/TRAMIX/", 
					"MEV Bs.As." : "http://mev.scba.gov.ar/", 
				}
			};

var search = { // Query variable name is q, hardcoded, looks like a standard already anyways
				"default": "https://google.com/search",
				"c": "http://www.cuitonline.com/search.php",
			};

// ---------- BUILD PAGE ----------
var pivotmatch = 0;
var totallinks = 0;
var prevregexp = "";
function matchLinks(regex = prevregexp) {
	totallinks = 0;
	pivotmatch = regex == prevregexp ? pivotmatch : 0;
	prevregexp = regex;
	pivotbuffer = pivotmatch;
	p = document.getElementById("links");
	while (p.firstChild) {
		p.removeChild(p.firstChild);
	}
	if (regex.charAt(1) == ' ' && search.hasOwnProperty(regex.charAt(0))) {
		document.getElementById("action").action = search[regex.charAt(0)];
		document.getElementById("action").children[0].name = "q";
	} else {
		match = new RegExp(regex ? regex : ".", "i");
		gmatches = false; // kinda ugly, rethink
		for (i = 0; i < Object.keys(sites).length; i++) {
			matches = false;
			sn = Object.keys(sites)[i];
			section = document.createElement("div");
			section.id = sn;
			section.innerHTML = sn;
			section.className = "section";
			inner = document.createElement("div");
			for (l = 0; l < Object.keys(sites[sn]).length; l++) {
				ln = Object.keys(sites[sn])[l];
				if (match.test(ln)) {
					link = document.createElement("a");
					link.href = sites[sn][ln];
					link.innerHTML = ln;
					if (!pivotbuffer++ && regex != "") {
						link.className = "selected";
						document.getElementById("action").action = sites[sn][ln];
						document.getElementById("action").children[0].removeAttribute("name");
					}
					inner.appendChild(link);
					matches = true;
					gmatches = true;
					totallinks++;
				}
			}
			section.appendChild(inner);
			matches ? p.appendChild(section) : false;
		}
		if (!gmatches || regex == "") {
			document.getElementById("action").action = search["default"];
			document.getElementById("action").children[0].name = "q";
		}
	}
	document.getElementById("main").style.height = document.getElementById("main").children[0].offsetHeight+"px";
}

document.onkeydown = function(e) {
	switch (e.keyCode) {
		case 38:
			pivotmatch = pivotmatch >= 0 ? 0 : pivotmatch + 1;
			matchLinks();
			break;
		case 40:
			pivotmatch = pivotmatch <= -totallinks + 1 ? -totallinks + 1 : pivotmatch - 1;
			matchLinks();
			break;
		default:
			break;
	}
	document.getElementById("action").children[0].focus();
}

document.getElementById("action").children[0].onkeypress = function(e) {
	if (e.key == "ArrowDown" || e.key == "ArrowUp") {
		return false;
	}
}

function displayClock() {
	now = new Date();
	clock = (now.getHours() < 10 ? "0"+now.getHours() : now.getHours())+":"
			+(now.getMinutes() < 10 ? "0"+now.getMinutes() : now.getMinutes())+":"
			+(now.getSeconds() < 10 ? "0"+now.getSeconds() : now.getSeconds());
	document.getElementById("clock").innerHTML = clock;
}

window.onload = matchLinks();
document.getElementById("action").onsubmit = function() {
	svalue = this.children[0].value;
	if (svalue.charAt(1) == ' ' && search.hasOwnProperty(svalue.charAt(0))) {
		this.children[0].value = svalue.substring(2);
	}
	return true;
}
displayClock();
setInterval(displayClock, 1000);
