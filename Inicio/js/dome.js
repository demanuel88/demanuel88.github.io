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
					"Deuda ABL/TSU (nro.cuenta)" 				: "https://appsb.mardelplata.gob.ar/consultas/loginC/index.asp?URL=/Consultas/ReliquidaCtaCtePasarelas/Index.asp",
					"Deuda ABL/TSU (nom.catastral)" 			: "https://appsvr.mardelplata.gob.ar/consultas/login/index.asp?URL=/Consultas/ConsuNom/ConsultaNom.asp", 
					"Ventanilla Unica"					: "https://mardelplata.gob.ar/vu", 
					//NO FUNCIONA "Cambio de Dominio"			: "https://ssl.mardelplata.gov.ar/consultas/SSL/cf/loginRedirect.asp?url=/Consultas/CambioTitularidad/index.asp", 
					"Imprimir Tasa ABL/TSU" 				: "https://appsb.mardelplata.gob.ar/consultas/loginC/index.asp?URL=/Consultas/ReliquidaCtaCtePasarelas/Index.asp", 
					//NO FUNCIONA "Liq. Pago Anual" 			: "https://appsvr.mardelplata.gob.ar/consultas/pagoanual/", 
					"Reimprimir Convenio ABL/TSU" 				: "https://appsvr.mardelplata.gob.ar/Consultas/ConsuCon/", 
					"Reimprimir Convenio ABL/TSU No.Venc" 			: "https://appsvr.mardelplata.gob.ar/Consultas/ConsuConRC/", 
					"Expedientes"						: "https://appsvr.mardelplata.gob.ar/Consultas/Expedientes/exped.asp", 
					"Expedientes Obras Priv." 				: "https://appsvr.mardelplata.gob.ar/consultas/obras/Default.aspx", 
					"Plano COT" 						: "https://appsvr.mardelplata.gob.ar/consultas/cot/index.asp", 
					"Plano Barrios"						: "https://appsl.mardelplata.gob.ar/apps/mapa_digital/mapadigital.php?subrubro=15", 
					"Sellados" 						: "https://appsvr.mardelplata.gob.ar/Consultas/SelladosVarios/index.asp", 
					"Reliq.Der.Construcc." 					: "https://appsvr.mardelplata.gob.ar/Consultas/ReliquidaCtaCteDC/index.asp", 
					"Reliq.Conv. Der.Construcc." 				: "https://appsvr.mardelplata.gob.ar/Consultas/ConsuConDC/", 
					//NO FUNCIONA "EMVIAL Deuda" 				: "https://appsvr.mardelplata.gob.ar/Consultas/ReliquidaCtaCteEmvial/index.asp", 
					//NO FUNCIONA "EMVIAL Deuda Pago Cdo."			: "https://appsvr.mardelplata.gob.ar/Consultas/ReliquidaCtaCteEmvialContado/index.asp", 
					//NO FUNCIONA "Nom.Cat" 				: "https://pm.mardelplata.gov.ar/sysworkflow/en-AR/formexterno/1998310264fad0987575121052352916/FormSolicitaAntecedentes.php", 
				},
				"ARBA": {
					"Aviso de Deudas Inmobiliario" 				: "https://app.arba.gov.ar/AvisoDeudas/?imp=0", 
					"Consulta Informacion Catastral" 			: "https://app.arba.gov.ar/Informacion/", 
					"Estado del Trámite Catastral" 				: "https://www10.arba.gov.ar/DSISIC/sFiltro/consultaProfesional.do?metodo=consultaProfesional", 
					"Liquidar Deuda Inmobiliario" 				: "https://app.arba.gov.ar/LiqPredet/InicioLiquidacion.do?imp=0&Frame=NO&origen=WEB&url_volver=https%3A%2F%2Fwww%2Earba%2Egov%2Ear%2F", 
					"SIESBA" 						: "https://www10.arba.gov.ar/SIESBA/", 
					"Sistema Información Catastral" 			: "https://www10.arba.gov.ar/DSISIC/", 
					"TGB" 							: "https://www.arba.gov.ar/Aplicaciones/TGBienes.asp", 
					"Calculadora TGB" 					: "https://www.colescba.org.ar/www/pages/itgb/indexCalculadoraITGB.jsf", 
					"Normas Legales Catastro" 				: "https://www.arba.gov.ar/Intranet/Legislacion/Catastro/Inicio.htm", 
					"Reclamos Titularidad" 					: "https://www.arba.gov.ar/DPDC/DefensaContribuyenteArba.asp", 
					"Cartografia Digital" 					: "https://www.carto.arba.gov.ar/cartoArba/application",
					"Consulta Valuaciones Historicas"			: "https://app.arba.gov.ar/Informacion/consultarValuacionesInit.do",

				},
				"Obras Sanitarias MGP": {
					"Consulta de Deuda" 					: "https://app2.osmgp.gov.ar/oficinavirtual/tramites-sin-registro/ctacte/deuda", 
					"Oficina Virtual"					: "https://app2.osmgp.gov.ar/oficinavirtual/", 
					"Iniciar Tramite"	 				: "https://app2.osmgp.gov.ar/oficinavirtual/tramites/nuevo", 
					"Ver Tramites"		 				: "https://app2.osmgp.gov.ar/oficinavirtual/tramites",
				},
				"ANSES": {
					"Constancia de CUIL" 					: "https://www.anses.gob.ar/constancia-de-cuil/", 
					"Constancia CUIL Vieja"					: "http://servicioswww.anses.gob.ar/ConstanciadeCuil2/Inicio.aspx",
				},
				"AFIP": {
					"Constancia de Inscripción" 				: "https://seti.afip.gob.ar/padron-puc-constancia-internet/ConsultaConstanciaAction.do", 
					"Acceso con Clave Fiscal"				: "https://auth.afip.gob.ar/contribuyente_/login.xhtml",  
				},
				"Registro Prop.": { 
					"Estado de Tramite Bs.As." 					: "https://servicios.rpba.gov.ar/estadoTramite/estadoTramite/jsp/index.jsp", 
					"Sitio Restringido Bs.As." 					: "https://servicios.rpba.gov.ar/RegPropNew/signon/login.do",
					//"Formularios" 						: "https://www.rpba.gov.ar/descargas/formulariospublicidad.php", 
					"Digesto Bs.As." 						: "https://www.rpba.gov.ar/biblioteca/digesto.php",
					"Sitio Restringido CABA"					: "https://informes.dnrpi.jus.gob.ar/sipel/Account/Login",
				},
				"Colegio de Escribanos": {
					"Nomina de Notarios Bs.As." 				: "https://www.colescba.org.ar/www/pages/nomina/indexNomina.jsf", 
					"Folios Actuación Notarial Digital"		 	: "https://www.colescba.org.ar/actuacionDigital", 
					"Gestion Firma Digital" 				: "https://www.colescba.org.ar/gestionFirmaDigital", 
					"Sitio Restingido Bs.As." 				: "https://www.colescba.org.ar/www/secIndex.html",
					"Solic.Test.Archivo Bs.As." 				: "https://www.colescba.org.ar/www/pages/archivo/segTestimonio/index.jsf", 
					"Escritorio Digital"					: "https://www.colescba.org.ar/escritorio",
					"Webmail Colegio" 					: "https://www.colescba.org.ar/webmail/", 
					"Consulta ReNaPer" 					: "https://www.colescba.org.ar/consultaRenaper/pages/formConsultaRenaper.jsf", 
					"Legalización Digital"					: "https://www.colescba.org.ar/legalizacionDigital/pages/public/solicitudLegalizacion.jsf",
					"Nomina de Notarios Cap.Fed." 				: "https://publico2.colegio-escribanos.org.ar:8445/nomina-escribanos-publica/nominas/inicio",
					"Municipios" 						: "http://www.colescba.org.ar/www/static/servicios/municipios.jsf", 
					"Calendario Fiscal" 					: "https://www.colescba.org.ar/portal/recursos/calendario-fiscal.html", 
				},
				"UIF": {
					"Listado de Terroristas" 				: "https://repet.jus.gob.ar/", 
					"Inhabilitados DNI/CUIT" 				: "https://www.colescba.org.ar/ics-wpd/uif/query_uif.htm", 
					"SRO" 							: "https://sro.uif.gob.ar/sro/", 
					"Constancia Inscripción" 				: "https://sro.uif.gob.ar/SRO/Login.aspx?ReturnUrl=%2fsro%2fSujeto%2fConstanciaInscripcion.aspx",
					"Listado Sujetos Obligados"			 	: "https://sro.uif.gob.ar/SROAPP/#/consultaRegistracion",
				},
				"Utilidades": {
					"Documentos Cuestionados"				: "https://docuest.aaip.gob.ar/index.html", 
					"CPA" 							: "https://www.correoargentino.com.ar/formularios/cpa", 
					"Exptes. Jurídicas" 					: "https://tramix.persjuri.gba.gov.ar:8080/TRAMIX/", 
					"MEV Bs.As." 						: "https://mev.scba.gov.ar/", 
					"Buscar DNI/CUIT con Nombre"				: "https://www.dateas.com/consulta_cuit_cuil",
					"GIDE Hipotecario"					: "https://extranet.hipotecario.com.ar/gide",
				},
					"Verificacion Doc. Digital": {
					"Titulo Prop. Automotor" 				: "https://www2.jus.gov.ar/dnrpa-site/#!/consultarTramite", 
					"Partidas Bs.As." 					: "https://www.gdeba.gba.gob.ar/consultagedo/", 
					"Partidas CABA" 					: "https://buenosaires.gob.ar/portal-autenticidad/", 
					"Apostilla" 						: "https://www.argentina.gob.ar/relacionesexterioresyculto/legalizacion-internacional", 
					"Oficio Jud. Buenos Aires" 				: "https://notificaciones.scba.gov.ar/verificar.aspx",
					"Folios Notariales CABA" 				: "https://publico.colegio-escribanos.org.ar:8445/vadono/",
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
