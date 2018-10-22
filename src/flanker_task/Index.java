package flanker_task;

import java.awt.BorderLayout;
import java.awt.EventQueue;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.border.EmptyBorder;

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

public class Index extends JFrame implements KeyListener {

	private JPanel contentPane;
	private JLabel contenedor_top;
	private JLabel contenedor_left_2;
	private JLabel contenedor_bot;
	private JLabel contenedor_right;
	private JLabel distractor_top;
	private JLabel distractor_left;
	private JLabel distractor_bot;
	private JLabel distractor_right;
	private JLabel cruz_centro;

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					Index frame = new Index();
					frame.setVisible(true);
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

				switch (flecha) {
				case 38: 
					/* up */
					crearImagenesAzules(1);
					break;
				case 40: 
					/* down */
					crearImagenesAzules(2);
					break;
				case 39: 
					/* right */
					crearImagenesAzules(3);
					break;
				case 37: 
					/* left */
					crearImagenesAzules(4);
					break;
				default:
					crearImagenesAzules(99);
					break;
				}
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
				System.out.println("mouse panel");
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

	public void crearImagenesAzules(int no_imagen) {

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

		case 21:
			/* CONTENEDORES */
			contenedor_top.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_bot.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			contenedor_right.setIcon(new ImageIcon(Index.class.getResource(contenedor_circulo)));
			contenedor_left_2.setIcon(new ImageIcon(Index.class.getResource(contenedor)));
			/* DISTRACTORES */
			distractor_top.revalidate();
			distractor_bot.revalidate();
			distractor_left.setIcon(new ImageIcon(Index.class.getResource(distractor_ovalo)));
			distractor_right.revalidate();
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

}
