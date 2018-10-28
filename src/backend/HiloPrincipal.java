package backend;

import java.util.Random;
import java.util.Timer;
import java.util.TimerTask;
import java.util.concurrent.ThreadLocalRandom;
import java.util.concurrent.TimeUnit;

import javax.swing.ImageIcon;
import javax.swing.JLabel;
import javax.swing.SwingWorker;

import flanker_task.Index;

public class HiloPrincipal extends SwingWorker<Integer, String> {

	public static JLabel etiqueta_principal;
	public int tiempos = 4000;

	public HiloPrincipal(JLabel etiqueta_principal) {
		super();
		this.etiqueta_principal = etiqueta_principal;
	}

	@Override
	protected Integer doInBackground() throws Exception {

		int[] ensayo = numeroAleatorio(32);
		try {
			for (int j = 0; j < ensayo.length; j++) {

				System.out.println("numero ensayo" + ensayo[j]);
				/* 6 segundos */
				Thread.sleep(6 * 1000);
				etiqueta_principal.setIcon(new ImageIcon(Index.class.getResource("/img/cruz.png")));
				System.out.println("cruz.png");

				/* aleatorio 1 a 3 segundos */
				Thread.sleep(3 * 1000);
				etiqueta_principal.setIcon(new ImageIcon(Index.class.getResource("/img/pantalla_azul.png")));
				System.out.println("pantalla_azul.png");

				/* duracion 1 segundos */
				Thread.sleep(1 * 1000);
				etiqueta_principal.setIcon(new ImageIcon(Index.class.getResource("/img/contornos.png")));
				System.out.println("contornos.png");

				/* 1 segundo */
				System.out.println("ensayo no "+j);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}

//		Timer timer = new Timer();
//
//		// for (int i = 0; i < ensayo.length; i++) {
//
//		TimerTask tarea = new TimerTask() {
//			int i = 0;
//			int numero_ensayo;
//
//			@Override
//			public void run() {
//				System.out.println("i=" + i);
//				if (i == 0) {
//					etiqueta_principal.setIcon(new ImageIcon(Index.class.getResource("/img/cruz.png")));
//					if (interrupcion(4) == true) {
//						crearImagenesAzules(0);
//					}
//				} else {
//					numero_ensayo = ensayo[i];
//					crearImagenesAzules(numero_ensayo);
//					System.out.println(numero_ensayo);
//					System.out.println("i=" + i);
//
//					if (i >= 31) {
//						timer.cancel();
//						timer.purge();
//						System.out.println("terminó");
//					}
//				}
//				i++;
//
//			}
//		};
//
//		timer.schedule(tarea, 10, 6000);

		return null;
	}

	public int[] numeroAleatorio(int n) {
		// n =numeros aleatorios
		int k = n; // auxiliar;
		int[] numeros = new int[n];
		int[] resultado = new int[n];
		Random rnd = new Random();
		int res;

		// se rellena una matriz ordenada del 1 al 31(1..n)
		for (int i = 0; i < n; i++) {
			numeros[i] = i + 1;
		}

		for (int i = 0; i < n; i++) {
			res = rnd.nextInt(k);
			resultado[i] = numeros[res];
			numeros[res] = numeros[k - 1];
			k--;

		}
		// se imprime el resultado;
		// System.out.println("El resultado de la matriz es:");

		return resultado;

	}

	public boolean interrupcion(int segundos) {
		try {
			Thread.sleep(segundos * 1000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return true;
	}

	public static void crearImagenesAzules(int no_imagen) {
		String imagenes = "/img/";
		System.out.println("imagen=" + no_imagen);

		switch (no_imagen) {
		case 0:
			etiqueta_principal.setIcon(new ImageIcon(Index.class.getResource(imagenes + "pantalla_azul.png")));
			/* CONTENEDORES */
			break;

		case 1:
			etiqueta_principal.setIcon(new ImageIcon(Index.class.getResource(imagenes + "azul/A_1.png")));
			/* CONTENEDORES */

			break;

		case 2:
			etiqueta_principal.setIcon(new ImageIcon(Index.class.getResource(imagenes + "azul/A_2.png")));
			/* CONTENEDORES */

			break;

		case 3:
			etiqueta_principal.setIcon(new ImageIcon(Index.class.getResource(imagenes + "azul/A_3.png")));
			/* CONTENEDORES */

			break;

		case 4:
			etiqueta_principal.setIcon(new ImageIcon(Index.class.getResource(imagenes + "azul/A_4.png")));
			/* CONTENEDORES */

			break;

		case 5:
			etiqueta_principal.setIcon(new ImageIcon(Index.class.getResource(imagenes + "azul/A_5.png")));
			/* CONTENEDORES */

			break;

		case 6:
			etiqueta_principal.setIcon(new ImageIcon(Index.class.getResource(imagenes + "azul/A_6.png")));
			/* CONTENEDORES */

			break;

		case 7:
			etiqueta_principal.setIcon(new ImageIcon(Index.class.getResource(imagenes + "azul/A_7.png")));
			/* CONTENEDORES */

			break;

		case 8:
			etiqueta_principal.setIcon(new ImageIcon(Index.class.getResource(imagenes + "azul/A_8.png")));
			/* CONTENEDORES */

			break;

		case 9:
			etiqueta_principal.setIcon(new ImageIcon(Index.class.getResource(imagenes + "azul/A_9.png")));
			/* CONTENEDORES */

			break;

		case 10:
			etiqueta_principal.setIcon(new ImageIcon(Index.class.getResource(imagenes + "azul/A_10.png")));
			/* CONTENEDORES */

			break;

		case 11:
			etiqueta_principal.setIcon(new ImageIcon(Index.class.getResource(imagenes + "azul/A_11.png")));
			/* CONTENEDORES */

			break;

		case 12:
			etiqueta_principal.setIcon(new ImageIcon(Index.class.getResource(imagenes + "azul/A_12.png")));
			/* CONTENEDORES */

			break;

		case 13:
			etiqueta_principal.setIcon(new ImageIcon(Index.class.getResource(imagenes + "azul/A_13.png")));
			/* CONTENEDORES */

			break;

		case 14:
			etiqueta_principal.setIcon(new ImageIcon(Index.class.getResource(imagenes + "azul/A_14.png")));
			/* CONTENEDORES */

			break;

		case 15:
			etiqueta_principal.setIcon(new ImageIcon(Index.class.getResource(imagenes + "azul/A_15.png")));
			/* CONTENEDORES */

			break;

		case 16:
			etiqueta_principal.setIcon(new ImageIcon(Index.class.getResource(imagenes + "azul/A_16.png")));
			/* CONTENEDORES */

			break;

		case 17:
			etiqueta_principal.setIcon(new ImageIcon(Index.class.getResource(imagenes + "azul/A_17.png")));
			/* CONTENEDORES */

			break;

		case 18:
			etiqueta_principal.setIcon(new ImageIcon(Index.class.getResource(imagenes + "azul/A_18.png")));
			/* CONTENEDORES */

			break;

		case 19:
			etiqueta_principal.setIcon(new ImageIcon(Index.class.getResource(imagenes + "azul/A_19.png")));
			/* CONTENEDORES */

			break;

		case 20:
			etiqueta_principal.setIcon(new ImageIcon(Index.class.getResource(imagenes + "azul/A_20.png")));
			/* CONTENEDORES */

			break;

		case 21:
			etiqueta_principal.setIcon(new ImageIcon(Index.class.getResource(imagenes + "azul/A_21.png")));
			/* CONTENEDORES */

			break;

		case 22:
			etiqueta_principal.setIcon(new ImageIcon(Index.class.getResource(imagenes + "azul/A_22.png")));
			/* CONTENEDORES */

			break;

		case 23:
			etiqueta_principal.setIcon(new ImageIcon(Index.class.getResource(imagenes + "azul/A_23.png")));
			/* CONTENEDORES */

			break;

		case 24:
			etiqueta_principal.setIcon(new ImageIcon(Index.class.getResource(imagenes + "azul/A_24.png")));
			/* CONTENEDORES */

			break;

		case 25:
			etiqueta_principal.setIcon(new ImageIcon(Index.class.getResource(imagenes + "azul/A_25.png")));
			/* CONTENEDORES */

			break;

		case 26:
			etiqueta_principal.setIcon(new ImageIcon(Index.class.getResource(imagenes + "azul/A_26.png")));
			/* CONTENEDORES */

			break;

		case 27:
			etiqueta_principal.setIcon(new ImageIcon(Index.class.getResource(imagenes + "azul/A_27.png")));
			/* CONTENEDORES */

			break;

		case 28:
			etiqueta_principal.setIcon(new ImageIcon(Index.class.getResource(imagenes + "azul/A_28.png")));
			/* CONTENEDORES */

			break;

		case 29:
			etiqueta_principal.setIcon(new ImageIcon(Index.class.getResource(imagenes + "azul/A_29.png")));
			/* CONTENEDORES */

			break;

		case 30:
			etiqueta_principal.setIcon(new ImageIcon(Index.class.getResource(imagenes + "azul/A_30.png")));
			/* CONTENEDORES */

			break;

		case 31:
			etiqueta_principal.setIcon(new ImageIcon(Index.class.getResource(imagenes + "azul/A_31.png")));
			/* CONTENEDORES */

			break;

		case 32:
			etiqueta_principal.setIcon(new ImageIcon(Index.class.getResource(imagenes + "azul/A_32.png")));
			/* CONTENEDORES */

			break;

		default:
			/* CONTENEDORES */
			etiqueta_principal.setIcon(new ImageIcon(Index.class.getResource(imagenes + "contornos.png")));
			;

			break;

		}

	}

}
