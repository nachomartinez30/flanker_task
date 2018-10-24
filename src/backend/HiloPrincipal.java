package backend;

import java.util.Random;
import java.util.Timer;
import java.util.TimerTask;
import java.util.concurrent.TimeUnit;

import javax.swing.ImageIcon;
import javax.swing.JLabel;
import javax.swing.SwingWorker;

import flanker_task.Index;

public class HiloPrincipal extends SwingWorker<Integer, String> {

	public static JLabel contenedor_top;
	public static JLabel contenedor_left_2;
	public static JLabel contenedor_bot;
	public static JLabel contenedor_right;
	public static JLabel distractor_top;
	public static JLabel distractor_left;
	public static JLabel distractor_bot;
	public static JLabel distractor_right;
	public static JLabel cruz_centro;

	public HiloPrincipal(JLabel contenedor_top, JLabel contenedor_left_2, JLabel contenedor_bot,
			JLabel contenedor_right, JLabel distractor_top, JLabel distractor_left, JLabel distractor_bot,
			JLabel distractor_right, JLabel cruz_centro) {
		super();
		this.contenedor_top = contenedor_top;
		this.contenedor_left_2 = contenedor_left_2;
		this.contenedor_bot = contenedor_bot;
		this.contenedor_right = contenedor_right;
		this.distractor_top = distractor_top;
		this.distractor_left = distractor_left;
		this.distractor_bot = distractor_bot;
		this.distractor_right = distractor_right;
		this.cruz_centro = cruz_centro;
	}

	@Override
	protected Integer doInBackground() throws Exception {
		int[] ensayo = numeroAleatorio(32);

		Timer timer = new Timer();

		// for (int i = 0; i < ensayo.length; i++) {

		TimerTask task = new TimerTask() {
			int i = 0;
			int numero_ensayo;

			@Override
			public void run() {
				i++;
				numero_ensayo = ensayo[i];
				crearImagenesAzules(numero_ensayo);
				System.out.println(numero_ensayo);
				System.out.println("i="+i);
				if(i>=31) {
					timer.cancel();
					timer.purge();
					System.out.println("terminó");
				}
			}
		};

		timer.schedule(task, 10, 6000);
		
		

		return null;
	}

	public static void crearImagenesAzules(int no_imagen) {

		String contenedor = "/img/contenedor.png";

		/* REACTIVOS */
		String contenedor_ovalo = "/img/ovalo_contenedor_azul.png";
		String contenedor_circulo = "/img/circulo_contenedor_azul.png";

		/* DISTRACTORES */
		String distractor_ovalo = "/img/dis_azul_ovalo.png";
		String distractor_circulo = "/img/dis_azul_cirulo.png";

		
		switch (no_imagen) {
		
		case 1:
			/* CONTENEDORES */
			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor_ovalo)));
			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			/* DISTRACTORES */
			distractor_top.setIcon(null);
			distractor_bot.setIcon(null);
			distractor_left.setIcon(null);
			distractor_right.setIcon(null);
			break;

		case 2:
			/* CONTENEDORES */
			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor_ovalo)));
			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			/* DISTRACTORES */
			distractor_top.setIcon(null);
			distractor_bot.setIcon(null);
			distractor_left.setIcon(null);
			distractor_right.setIcon(new ImageIcon(Index.class.getResource(distractor_circulo)));
			break;

		case 3:
			/* CONTENEDORES */
			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor_ovalo)));
			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			/* DISTRACTORES */
			distractor_top.setIcon(null);
			distractor_bot.setIcon(null);
			distractor_left.setIcon(null);
			distractor_right.setIcon(null);
			break;

		case 4:
			/* CONTENEDORES */
			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor_ovalo)));
			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			/* DISTRACTORES */
			distractor_top.setIcon(null);
			distractor_bot.setIcon(new ImageIcon(Index.class.getResource(distractor_circulo)));
			distractor_left.setIcon(null);
			distractor_right.setIcon(null);
			break;

		case 5:
			/* CONTENEDORES */
			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor_ovalo)));
			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			/* DISTRACTORES */
			distractor_top.setIcon(null);
			distractor_bot.setIcon(null);
			distractor_left.setIcon(null);
			distractor_right.setIcon(null);
			break;

		case 6:
			/* CONTENEDORES */
			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor_ovalo)));
			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			/* DISTRACTORES */
			distractor_top.setIcon(null);
			distractor_bot.setIcon(null);
			distractor_left.setIcon(new ImageIcon(Index.class.getResource(distractor_circulo)));
			distractor_right.setIcon(null);
			break;

		case 7:
			/* CONTENEDORES */
			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor_ovalo)));
			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			/* DISTRACTORES */
			distractor_top.setIcon(null);
			distractor_bot.setIcon(null);
			distractor_left.setIcon(null);
			distractor_right.setIcon(null);
			break;

		case 8:
			/* CONTENEDORES */
			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor_ovalo)));
			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			/* DISTRACTORES */
			distractor_top.setIcon(new ImageIcon(Index.class.getResource(distractor_circulo)));
			distractor_bot.setIcon(null);
			distractor_left.setIcon(null);
			distractor_right.setIcon(null);
			break;

		case 9:
			/* CONTENEDORES */
			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor_ovalo)));
			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			/* DISTRACTORES */
			distractor_top.setIcon(null);
			distractor_bot.setIcon(null);
			distractor_left.setIcon(null);
			distractor_right.setIcon(null);
			break;

		case 10:
			/* CONTENEDORES */
			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor_ovalo)));
			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			/* DISTRACTORES */
			distractor_top.setIcon(null);
			distractor_bot.setIcon(null);
			distractor_left.setIcon(null);
			distractor_right.setIcon(new ImageIcon(Index.class.getResource(distractor_circulo)));
			break;

		case 11:
			/* CONTENEDORES */
			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor_ovalo)));
			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			/* DISTRACTORES */
			distractor_top.setIcon(null);
			distractor_bot.setIcon(null);
			distractor_left.setIcon(null);
			distractor_right.setIcon(null);
			break;

		case 12:
			/* CONTENEDORES */
			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor_ovalo)));
			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			/* DISTRACTORES */
			distractor_top.setIcon(null);
			distractor_bot.setIcon(new ImageIcon(Index.class.getResource(distractor_circulo)));
			distractor_left.setIcon(null);
			distractor_right.setIcon(null);
			break;

		case 13:
			/* CONTENEDORES */
			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor_ovalo)));
			/* DISTRACTORES */
			distractor_top.setIcon(null);
			distractor_bot.setIcon(null);
			distractor_left.setIcon(null);
			distractor_right.setIcon(null);
			break;

		case 14:
			/* CONTENEDORES */
			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor_ovalo)));
			/* DISTRACTORES */
			distractor_top.setIcon(null);
			distractor_bot.setIcon(null);
			distractor_left.setIcon(new ImageIcon(Index.class.getResource(distractor_circulo)));
			distractor_right.setIcon(null);
			break;

		case 15:
			/* CONTENEDORES */
			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor_ovalo)));
			/* DISTRACTORES */
			distractor_top.setIcon(null);
			distractor_bot.setIcon(null);
			distractor_left.setIcon(null);
			distractor_right.setIcon(null);
			break;

		case 16:
			/* CONTENEDORES */
			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor_ovalo)));
			/* DISTRACTORES */
			distractor_top.setIcon(new ImageIcon(Index.class.getResource(distractor_circulo)));
			distractor_bot.setIcon(null);
			distractor_left.setIcon(null);
			distractor_right.setIcon(null);
			break;

		case 17:
			/* CONTENEDORES */
			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor_circulo)));
			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			/* DISTRACTORES */
			distractor_top.setIcon(null);
			distractor_bot.setIcon(null);
			distractor_left.setIcon(null);
			distractor_right.setIcon(new ImageIcon(Index.class.getResource(distractor_ovalo)));
			break;

		case 18:
			/* CONTENEDORES */
			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor_circulo)));
			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			/* DISTRACTORES */
			distractor_top.setIcon(null);
			distractor_bot.setIcon(null);
			distractor_left.setIcon(null);
			distractor_right.setIcon(null);
			break;

		case 19:
			/* CONTENEDORES */
			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor_circulo)));
			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			/* DISTRACTORES */
			distractor_top.setIcon(null);
			distractor_bot.setIcon(new ImageIcon(Index.class.getResource(distractor_ovalo)));
			distractor_left.setIcon(null);
			distractor_right.setIcon(null);
			break;

		case 20:
			/* CONTENEDORES */
			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor_circulo)));
			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			/* DISTRACTORES */
			distractor_top.setIcon(null);
			distractor_bot.setIcon(null);
			distractor_left.setIcon(null);
			distractor_right.setIcon(null);
			break;

		case 21:
			/* CONTENEDORES */
			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor_circulo)));
			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			/* DISTRACTORES */
			distractor_top.setIcon(null);
			distractor_bot.setIcon(null);
			distractor_left.setIcon(new ImageIcon(Index.class.getResource(distractor_ovalo)));
			distractor_right.setIcon(null);
			break;

		case 22:
			/* CONTENEDORES */
			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor_circulo)));
			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			/* DISTRACTORES */
			distractor_top.setIcon(null);
			distractor_bot.setIcon(null);
			distractor_left.setIcon(null);
			distractor_right.setIcon(null);
			break;

		case 23:
			/* CONTENEDORES */
			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor_circulo)));
			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			/* DISTRACTORES */
			distractor_top.setIcon(new ImageIcon(Index.class.getResource(distractor_ovalo)));
			distractor_bot.setIcon(null);
			distractor_left.setIcon(null);
			distractor_right.setIcon(null);
			break;

		case 24:
			/* CONTENEDORES */
			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor_circulo)));
			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			/* DISTRACTORES */
			distractor_top.setIcon(null);
			distractor_bot.setIcon(null);
			distractor_left.setIcon(null);
			distractor_right.setIcon(null);
			break;

		case 25:
			/* CONTENEDORES */
			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor_circulo)));
			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			/* DISTRACTORES */
			distractor_top.setIcon(null);
			distractor_bot.setIcon(null);
			distractor_left.setIcon(null);
			distractor_right.setIcon(null);
			break;

		case 26:
			/* CONTENEDORES */
			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor_circulo)));
			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			/* DISTRACTORES */
			distractor_top.setIcon(null);
			distractor_bot.setIcon(null);
			distractor_left.setIcon(new ImageIcon(Index.class.getResource(distractor_ovalo)));
			distractor_right.setIcon(null);
			break;

		case 27:
			/* CONTENEDORES */
			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor_circulo)));
			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			/* DISTRACTORES */
			distractor_top.setIcon(new ImageIcon(Index.class.getResource(distractor_ovalo)));
			distractor_bot.setIcon(null);
			distractor_left.setIcon(null);
			distractor_right.setIcon(null);
			break;

		case 28:
			/* CONTENEDORES */
			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor_circulo)));
			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			/* DISTRACTORES */
			distractor_top.setIcon(new ImageIcon(Index.class.getResource(distractor_ovalo)));
			distractor_bot.setIcon(null);
			distractor_left.setIcon(null);
			distractor_right.setIcon(null);
			break;

		case 29:
			/* CONTENEDORES */
			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor_circulo)));
			/* DISTRACTORES */
			distractor_top.setIcon(null);
			distractor_bot.setIcon(null);
			distractor_left.setIcon(null);
			distractor_right.setIcon(null);
			break;

		case 30:
			/* CONTENEDORES */
			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor_circulo)));
			/* DISTRACTORES */
			distractor_top.setIcon(null);
			distractor_bot.setIcon(null);
			distractor_left.setIcon(null);
			distractor_right.setIcon(new ImageIcon(Index.class.getResource(distractor_ovalo)));
			break;

		case 31:
			/* CONTENEDORES */
			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor_circulo)));
			/* DISTRACTORES */
			distractor_top.setIcon(null);
			distractor_bot.setIcon(null);
			distractor_left.setIcon(null);
			distractor_right.setIcon(null);
			break;

		case 32:
			/* CONTENEDORES */
			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor_circulo)));
			/* DISTRACTORES */
			distractor_top.setIcon(null);
			distractor_bot.setIcon(new ImageIcon(Index.class.getResource(distractor_ovalo)));
			distractor_left.setIcon(null);
			distractor_right.setIcon(null);
			break;

		default:
			/* CONTENEDORES */
			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			/* DISTRACTORES */
			distractor_top.setIcon(null);
			distractor_bot.setIcon(null);
			distractor_left.setIcon(null);
			distractor_right.setIcon(null);
			break;

		}

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

}
