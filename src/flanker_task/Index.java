package flanker_task;

import java.awt.BorderLayout;
import java.awt.EventQueue;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.border.EmptyBorder;
import javax.swing.event.TreeWillExpandListener;

import backend.HiloPrincipal;

import javax.swing.JLabel;
import javax.swing.GroupLayout;
import javax.swing.GroupLayout.Alignment;
import javax.swing.SwingConstants;
import java.awt.Font;
import java.awt.Color;
import javax.swing.LayoutStyle.ComponentPlacement;
import java.awt.Dimension;
import javax.swing.UIManager;
import java.awt.CardLayout;
import java.awt.GridBagLayout;
import java.awt.GridBagConstraints;
import java.awt.Insets;
import javax.swing.SpringLayout;
import java.awt.GridLayout;
import javax.swing.ImageIcon;
import java.awt.event.KeyAdapter;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.util.Random;
import java.util.Timer;
import java.util.TimerTask;

public class Index extends JFrame implements KeyListener {

	private JPanel contentPane;
	public static JLabel contenedor_top;
	public static JLabel contenedor_left_2;
	public static JLabel contenedor_bot;
	public static JLabel contenedor_right;
	public static JLabel distractor_top;
	public static JLabel distractor_left;
	public static JLabel distractor_bot;
	public static JLabel distractor_right;
	public static JLabel cruz_centro;

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					Index frame = new Index();
					frame.setVisible(true);
					// iniciarSesion();
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}

	/**
	 * Create the frame.
	 */
	public Index() {
		addKeyListener(new KeyAdapter() {
			@Override
			public void keyPressed(KeyEvent event) {
				int flecha = event.getExtendedKeyCode();
				System.out.println("flecha"+flecha);

			}
		});
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 1314, 780);
		contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		contentPane.setLayout(new BorderLayout(0, 0));
		setContentPane(contentPane);

		JPanel panel = new JPanel();
		panel.addMouseListener(new MouseAdapter() {
			@Override
			public void mouseClicked(MouseEvent arg0) {
				HiloPrincipal principal = new HiloPrincipal(contenedor_top, contenedor_left_2, contenedor_bot,
						contenedor_right, distractor_top, distractor_left, distractor_bot, distractor_right,
						cruz_centro);
				principal.run();
			}
		});
		contentPane.add(panel, BorderLayout.CENTER);
		panel.setLayout(new GridLayout(5, 7, 0, 0));

		JLabel label = new JLabel((String) null);
		label.setBorder(null);
		label.setHorizontalAlignment(SwingConstants.CENTER);
		label.setBackground(Color.BLACK);
		panel.add(label);

		JLabel label_1 = new JLabel("");
		label_1.setBorder(null);
		label_1.setHorizontalAlignment(SwingConstants.CENTER);
		label_1.setBackground(Color.BLACK);
		panel.add(label_1);

		distractor_top = new JLabel("");
		distractor_top.setVerticalAlignment(SwingConstants.BOTTOM);
		distractor_top.setBorder(null);
		distractor_top.setHorizontalAlignment(SwingConstants.CENTER);
		distractor_top.setBackground(Color.BLACK);
		panel.add(distractor_top);

		JLabel label_8 = new JLabel("");
		label_8.setBorder(null);
		label_8.setHorizontalAlignment(SwingConstants.CENTER);
		label_8.setBackground(Color.BLACK);
		panel.add(label_8);

		JLabel label_7 = new JLabel("");
		label_7.setBorder(null);
		label_7.setHorizontalAlignment(SwingConstants.CENTER);
		label_7.setBackground(Color.BLACK);
		panel.add(label_7);

		JLabel label_6 = new JLabel("");
		label_6.setBorder(null);
		label_6.setHorizontalAlignment(SwingConstants.CENTER);
		label_6.setBackground(Color.BLACK);
		panel.add(label_6);

		JLabel label_4 = new JLabel("");
		label_4.setBorder(null);
		label_4.setHorizontalAlignment(SwingConstants.CENTER);
		label_4.setBackground(Color.BLACK);
		panel.add(label_4);

		contenedor_top = new JLabel("");
		contenedor_top.setVerticalAlignment(SwingConstants.BOTTOM);
		// lblBackground.setIcon(new ImageIcon());
		contenedor_top.setIcon(new ImageIcon(Index.class.getResource("/img/contenedor.png")));
		contenedor_top.setBorder(null);
		contenedor_top.setHorizontalAlignment(SwingConstants.CENTER);
		contenedor_top.setBackground(Color.WHITE);
		panel.add(contenedor_top);

		JLabel label_9 = new JLabel("");
		label_9.setBorder(null);
		label_9.setHorizontalAlignment(SwingConstants.CENTER);
		label_9.setBackground(Color.BLACK);
		panel.add(label_9);

		JLabel label_11 = new JLabel("");
		label_11.setBorder(null);
		label_11.setHorizontalAlignment(SwingConstants.CENTER);
		label_11.setBackground(Color.BLACK);
		panel.add(label_11);

		distractor_left = new JLabel("");
		distractor_left.setBorder(null);
		distractor_left.setHorizontalAlignment(SwingConstants.RIGHT);
		distractor_left.setBackground(Color.BLACK);
		panel.add(distractor_left);

		contenedor_left_2 = new JLabel("");
		contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource("/img/contenedor.png")));
		contenedor_left_2.setHorizontalTextPosition(SwingConstants.RIGHT);
		contenedor_left_2.setBorder(null);
		contenedor_left_2.setHorizontalAlignment(SwingConstants.RIGHT);
		contenedor_left_2.setBackground(Color.BLACK);
		panel.add(contenedor_left_2);

		cruz_centro = new JLabel("+");
		cruz_centro.addKeyListener(new KeyAdapter() {
			@Override
			public void keyPressed(KeyEvent event) {
				// char ch = event.getKeyChar();

				System.out.println(event.getKeyChar());
			}
		});
		cruz_centro.setForeground(Color.BLACK);
		cruz_centro.setFont(new Font("SansSerif", Font.PLAIN, 40));
		cruz_centro.setBorder(null);
		cruz_centro.setHorizontalAlignment(SwingConstants.CENTER);
		cruz_centro.setBackground(new Color(0, 255, 0));
		panel.add(cruz_centro);

		contenedor_right = new JLabel("");
		contenedor_right.setHorizontalAlignment(SwingConstants.LEFT);
		contenedor_right.setIcon(new ImageIcon(Index.class.getResource("/img/contenedor.png")));
		contenedor_right.setBorder(null);
		panel.add(contenedor_right);

		distractor_right = new JLabel("");
		distractor_right.setHorizontalAlignment(SwingConstants.LEFT);
		distractor_right.setBorder(null);
		panel.add(distractor_right);

		JLabel lblNewLabel_2 = new JLabel("");
		lblNewLabel_2.setBorder(null);
		panel.add(lblNewLabel_2);

		JLabel label_12 = new JLabel("");
		label_12.setBorder(null);
		label_12.setHorizontalAlignment(SwingConstants.CENTER);
		label_12.setBackground(Color.BLACK);
		panel.add(label_12);

		contenedor_bot = new JLabel("");
		contenedor_bot.setVerticalAlignment(SwingConstants.TOP);
		contenedor_bot.setIcon(new ImageIcon(Index.class.getResource("/img/contenedor.png")));
		contenedor_bot.setBorder(null);
		contenedor_bot.setHorizontalAlignment(SwingConstants.CENTER);
		contenedor_bot.setBackground(Color.BLACK);
		panel.add(contenedor_bot);

		JLabel lblNewLabel_3 = new JLabel("");
		lblNewLabel_3.setBorder(null);
		panel.add(lblNewLabel_3);

		JLabel lblNewLabel_4 = new JLabel("");
		lblNewLabel_4.setBorder(null);
		panel.add(lblNewLabel_4);

		JLabel lblNewLabel_5 = new JLabel("");
		lblNewLabel_5.setBorder(null);
		panel.add(lblNewLabel_5);

		JLabel lblNewLabel_7 = new JLabel("");
		lblNewLabel_7.setBorder(null);
		panel.add(lblNewLabel_7);

		distractor_bot = new JLabel("");
		distractor_bot.setHorizontalAlignment(SwingConstants.CENTER);
		distractor_bot.setHorizontalTextPosition(SwingConstants.CENTER);
		distractor_bot.setVerticalAlignment(SwingConstants.TOP);
		distractor_bot.setBorder(null);
		panel.add(distractor_bot);

		JLabel label_15 = new JLabel("");
		label_15.setBorder(null);
		panel.add(label_15);

		JLabel label_16 = new JLabel("");
		label_16.setBorder(null);
		panel.add(label_16);
	}

	@Override
	public void keyPressed(KeyEvent arg0) {
		// TODO Auto-generated method stub

	}

	@Override
	public void keyReleased(KeyEvent arg0) {
		// TODO Auto-generated method stub

	}

	@Override
	public void keyTyped(KeyEvent arg0) {
		// TODO Auto-generated method stub

	}
//
//	public static void crearImagenesAzules(int no_imagen) {
//		System.out.println("ensayo Azul");
//		String contenedor = "/img/contenedor.png";
//
//		/* REACTIVOS */
//		String contenedor_ovalo = "/img/ovalo_contenedor_azul.png";
//		String contenedor_circulo = "/img/circulo_contenedor_azul.png";
//
//		/* DISTRACTORES */
//		String distractor_ovalo = "/img/dis_azul_ovalo.png";
//		String distractor_circulo = "/img/dis_azul_cirulo.png";
//
//		switch (no_imagen) {
//		case 1:
//			/* CONTENEDORES */
//			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor_ovalo)));
//			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			/* DISTRACTORES */
//			distractor_top.setIcon(null);
//			distractor_bot.setIcon(null);
//			distractor_left.setIcon(null);
//			distractor_right.setIcon(null);
//			break;
//
//		case 2:
//			/* CONTENEDORES */
//			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor_ovalo)));
//			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			/* DISTRACTORES */
//			distractor_top.setIcon(null);
//			distractor_bot.setIcon(null);
//			distractor_left.setIcon(null);
//			distractor_right.setIcon(new ImageIcon(Index.class.getResource(distractor_circulo)));
//			break;
//
//		case 3:
//			/* CONTENEDORES */
//			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor_ovalo)));
//			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			/* DISTRACTORES */
//			distractor_top.setIcon(null);
//			distractor_bot.setIcon(null);
//			distractor_left.setIcon(null);
//			distractor_right.setIcon(null);
//			break;
//
//		case 4:
//			/* CONTENEDORES */
//			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor_ovalo)));
//			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			/* DISTRACTORES */
//			distractor_top.setIcon(null);
//			distractor_bot.setIcon(new ImageIcon(Index.class.getResource(distractor_circulo)));
//			distractor_left.setIcon(null);
//			distractor_right.setIcon(null);
//			break;
//
//		case 5:
//			/* CONTENEDORES */
//			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor_ovalo)));
//			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			/* DISTRACTORES */
//			distractor_top.setIcon(null);
//			distractor_bot.setIcon(null);
//			distractor_left.setIcon(null);
//			distractor_right.setIcon(null);
//			break;
//
//		case 6:
//			/* CONTENEDORES */
//			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor_ovalo)));
//			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			/* DISTRACTORES */
//			distractor_top.setIcon(null);
//			distractor_bot.setIcon(null);
//			distractor_left.setIcon(new ImageIcon(Index.class.getResource(distractor_circulo)));
//			distractor_right.setIcon(null);
//			break;
//
//		case 7:
//			/* CONTENEDORES */
//			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor_ovalo)));
//			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			/* DISTRACTORES */
//			distractor_top.setIcon(null);
//			distractor_bot.setIcon(null);
//			distractor_left.setIcon(null);
//			distractor_right.setIcon(null);
//			break;
//
//		case 8:
//			/* CONTENEDORES */
//			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor_ovalo)));
//			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			/* DISTRACTORES */
//			distractor_top.setIcon(new ImageIcon(Index.class.getResource(distractor_circulo)));
//			distractor_bot.setIcon(null);
//			distractor_left.setIcon(null);
//			distractor_right.setIcon(null);
//			break;
//
//		case 9:
//			/* CONTENEDORES */
//			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor_ovalo)));
//			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			/* DISTRACTORES */
//			distractor_top.setIcon(null);
//			distractor_bot.setIcon(null);
//			distractor_left.setIcon(null);
//			distractor_right.setIcon(null);
//			break;
//
//		case 10:
//			/* CONTENEDORES */
//			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor_ovalo)));
//			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			/* DISTRACTORES */
//			distractor_top.setIcon(null);
//			distractor_bot.setIcon(null);
//			distractor_left.setIcon(null);
//			distractor_right.setIcon(new ImageIcon(Index.class.getResource(distractor_circulo)));
//			break;
//
//		case 11:
//			/* CONTENEDORES */
//			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor_ovalo)));
//			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			/* DISTRACTORES */
//			distractor_top.setIcon(null);
//			distractor_bot.setIcon(null);
//			distractor_left.setIcon(null);
//			distractor_right.setIcon(null);
//			break;
//
//		case 12:
//			/* CONTENEDORES */
//			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor_ovalo)));
//			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			/* DISTRACTORES */
//			distractor_top.setIcon(null);
//			distractor_bot.setIcon(new ImageIcon(Index.class.getResource(distractor_circulo)));
//			distractor_left.setIcon(null);
//			distractor_right.setIcon(null);
//			break;
//
//		case 13:
//			/* CONTENEDORES */
//			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor_ovalo)));
//			/* DISTRACTORES */
//			distractor_top.setIcon(null);
//			distractor_bot.setIcon(null);
//			distractor_left.setIcon(null);
//			distractor_right.setIcon(null);
//			break;
//
//		case 14:
//			/* CONTENEDORES */
//			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor_ovalo)));
//			/* DISTRACTORES */
//			distractor_top.setIcon(null);
//			distractor_bot.setIcon(null);
//			distractor_left.setIcon(new ImageIcon(Index.class.getResource(distractor_circulo)));
//			distractor_right.setIcon(null);
//			break;
//
//		case 15:
//			/* CONTENEDORES */
//			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor_ovalo)));
//			/* DISTRACTORES */
//			distractor_top.setIcon(null);
//			distractor_bot.setIcon(null);
//			distractor_left.setIcon(null);
//			distractor_right.setIcon(null);
//			break;
//
//		case 16:
//			/* CONTENEDORES */
//			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor_ovalo)));
//			/* DISTRACTORES */
//			distractor_top.setIcon(new ImageIcon(Index.class.getResource(distractor_circulo)));
//			distractor_bot.setIcon(null);
//			distractor_left.setIcon(null);
//			distractor_right.setIcon(null);
//			break;
//
//		case 17:
//			/* CONTENEDORES */
//			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor_circulo)));
//			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			/* DISTRACTORES */
//			distractor_top.setIcon(null);
//			distractor_bot.setIcon(null);
//			distractor_left.setIcon(null);
//			distractor_right.setIcon(new ImageIcon(Index.class.getResource(distractor_ovalo)));
//			break;
//
//		case 18:
//			/* CONTENEDORES */
//			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor_circulo)));
//			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			/* DISTRACTORES */
//			distractor_top.setIcon(null);
//			distractor_bot.setIcon(null);
//			distractor_left.setIcon(null);
//			distractor_right.setIcon(null);
//			break;
//
//		case 19:
//			/* CONTENEDORES */
//			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor_circulo)));
//			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			/* DISTRACTORES */
//			distractor_top.setIcon(null);
//			distractor_bot.setIcon(new ImageIcon(Index.class.getResource(distractor_ovalo)));
//			distractor_left.setIcon(null);
//			distractor_right.setIcon(null);
//			break;
//
//		case 20:
//			/* CONTENEDORES */
//			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor_circulo)));
//			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			/* DISTRACTORES */
//			distractor_top.setIcon(null);
//			distractor_bot.setIcon(null);
//			distractor_left.setIcon(null);
//			distractor_right.setIcon(null);
//			break;
//
//		case 21:
//			/* CONTENEDORES */
//			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor_circulo)));
//			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			/* DISTRACTORES */
//			distractor_top.setIcon(null);
//			distractor_bot.setIcon(null);
//			distractor_left.setIcon(new ImageIcon(Index.class.getResource(distractor_ovalo)));
//			distractor_right.setIcon(null);
//			break;
//
//		case 22:
//			/* CONTENEDORES */
//			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor_circulo)));
//			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			/* DISTRACTORES */
//			distractor_top.setIcon(null);
//			distractor_bot.setIcon(null);
//			distractor_left.setIcon(null);
//			distractor_right.setIcon(null);
//			break;
//
//		case 23:
//			/* CONTENEDORES */
//			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor_circulo)));
//			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			/* DISTRACTORES */
//			distractor_top.setIcon(new ImageIcon(Index.class.getResource(distractor_ovalo)));
//			distractor_bot.setIcon(null);
//			distractor_left.setIcon(null);
//			distractor_right.setIcon(null);
//			break;
//
//		case 24:
//			/* CONTENEDORES */
//			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor_circulo)));
//			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			/* DISTRACTORES */
//			distractor_top.setIcon(null);
//			distractor_bot.setIcon(null);
//			distractor_left.setIcon(null);
//			distractor_right.setIcon(null);
//			break;
//
//		case 25:
//			/* CONTENEDORES */
//			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor_circulo)));
//			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			/* DISTRACTORES */
//			distractor_top.setIcon(null);
//			distractor_bot.setIcon(null);
//			distractor_left.setIcon(null);
//			distractor_right.setIcon(null);
//			break;
//
//		case 26:
//			/* CONTENEDORES */
//			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor_circulo)));
//			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			/* DISTRACTORES */
//			distractor_top.setIcon(null);
//			distractor_bot.setIcon(null);
//			distractor_left.setIcon(new ImageIcon(Index.class.getResource(distractor_ovalo)));
//			distractor_right.setIcon(null);
//			break;
//
//		case 27:
//			/* CONTENEDORES */
//			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor_circulo)));
//			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			/* DISTRACTORES */
//			distractor_top.setIcon(new ImageIcon(Index.class.getResource(distractor_ovalo)));
//			distractor_bot.setIcon(null);
//			distractor_left.setIcon(null);
//			distractor_right.setIcon(null);
//			break;
//
//		case 28:
//			/* CONTENEDORES */
//			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor_circulo)));
//			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			/* DISTRACTORES */
//			distractor_top.setIcon(new ImageIcon(Index.class.getResource(distractor_ovalo)));
//			distractor_bot.setIcon(null);
//			distractor_left.setIcon(null);
//			distractor_right.setIcon(null);
//			break;
//
//		case 29:
//			/* CONTENEDORES */
//			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor_circulo)));
//			/* DISTRACTORES */
//			distractor_top.setIcon(null);
//			distractor_bot.setIcon(null);
//			distractor_left.setIcon(null);
//			distractor_right.setIcon(null);
//			break;
//
//		case 30:
//			/* CONTENEDORES */
//			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor_circulo)));
//			/* DISTRACTORES */
//			distractor_top.setIcon(null);
//			distractor_bot.setIcon(null);
//			distractor_left.setIcon(null);
//			distractor_right.setIcon(new ImageIcon(Index.class.getResource(distractor_ovalo)));
//			break;
//
//		case 31:
//			/* CONTENEDORES */
//			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor_circulo)));
//			/* DISTRACTORES */
//			distractor_top.setIcon(null);
//			distractor_bot.setIcon(null);
//			distractor_left.setIcon(null);
//			distractor_right.setIcon(null);
//			break;
//
//		case 32:
//			/* CONTENEDORES */
//			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor_circulo)));
//			/* DISTRACTORES */
//			distractor_top.setIcon(null);
//			distractor_bot.setIcon(new ImageIcon(Index.class.getResource(distractor_ovalo)));
//			distractor_left.setIcon(null);
//			distractor_right.setIcon(null);
//			break;
//
//		default:
//			/* CONTENEDORES */
//			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
//			/* DISTRACTORES */
//			distractor_top.setIcon(null);
//			distractor_bot.setIcon(null);
//			distractor_left.setIcon(null);
//			distractor_right.setIcon(null);
//			break;
//
//		}
//
//	}
//
//	public static void iniciarSesion() {
//
//		int[] ensayo = numeroAleatorio(32);
//		int numero_ensayo;
//		try {
//
//			for (int i = 0; i < ensayo.length; i++) {
//
//				numero_ensayo = ensayo[i];
//				crearImagenesAzules(numero_ensayo);
//				System.out.println(numero_ensayo);
//				Thread.sleep(1000);
//			}
//
//		} catch (InterruptedException e) {
//			e.printStackTrace();
//		}
//
//	}
//
//	private static int[] numeroAleatorio(int n) {
//		// n =numeros aleatorios
//		int k = n; // auxiliar;
//		int[] numeros = new int[n];
//		int[] resultado = new int[n];
//		Random rnd = new Random();
//		int res;
//
//		// se rellena una matriz ordenada del 1 al 31(1..n)
//		for (int i = 0; i < n; i++) {
//			numeros[i] = i + 1;
//		}
//
//		for (int i = 0; i < n; i++) {
//			res = rnd.nextInt(k);
//			resultado[i] = numeros[res];
//			numeros[res] = numeros[k - 1];
//			k--;
//
//		}
//		// se imprime el resultado;
//
//		return resultado;
//
//	}

}
