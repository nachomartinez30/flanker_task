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

	public static JLabel label;
	public static JLabel label_1;
	public static JLabel label_2;
	public static JLabel label_3;
	public static JLabel label_5;
	public static JLabel label_4;
	public static JLabel label_6;
	public static JLabel label_7;
	public static JLabel lblNewLabel;
	public static JLabel label_8;
	public static JLabel lblNewLabel_1;
	public static JLabel lblNewLabel_2;
	public static JLabel lblNewLabel_3;
	public static JLabel lblNewLabel_4;
	public static JLabel label_9;
	public static JLabel label_10;

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
				int tecla = event.getExtendedKeyCode();
				System.out.println("flecha=" + tecla);
				if (tecla == 10) {

					HiloPrincipal principal = new HiloPrincipal(contenedor_top, contenedor_left_2, contenedor_bot,
							contenedor_right, distractor_top, distractor_left, distractor_bot, distractor_right,
							cruz_centro, label, label_1, label_2, label_3, label_5, label_4, label_6, label_7,
							lblNewLabel, label_8, lblNewLabel_1, lblNewLabel_2, lblNewLabel_3, lblNewLabel_4, label_9,
							label_10);

					principal.run();
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

			}
		});
		contentPane.add(panel, BorderLayout.CENTER);
		panel.setLayout(new GridLayout(5, 7, 0, 0));

		label = new JLabel((String) null);
		label.setBorder(null);
		label.setHorizontalAlignment(SwingConstants.CENTER);
		label.setBackground(Color.BLACK);
		panel.add(label);

		label_1 = new JLabel("");
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

		label_2 = new JLabel("");
		label_2.setBorder(null);
		label_2.setHorizontalAlignment(SwingConstants.CENTER);
		label_2.setBackground(Color.BLACK);
		panel.add(label_2);

		label_3 = new JLabel("");
		label_3.setBorder(null);
		label_3.setHorizontalAlignment(SwingConstants.CENTER);
		label_3.setBackground(Color.BLACK);
		panel.add(label_3);

		label_5 = new JLabel("");
		label_5.setBorder(null);
		label_5.setHorizontalAlignment(SwingConstants.CENTER);
		label_5.setBackground(Color.BLACK);
		panel.add(label_5);

		label_4 = new JLabel("");
		label_4.setBorder(null);
		label_4.setHorizontalAlignment(SwingConstants.CENTER);
		label_4.setBackground(Color.BLACK);
		panel.add(label_4);

		contenedor_top = new JLabel("");
		contenedor_top.setVerticalAlignment(SwingConstants.BOTTOM);
		// lblBackground.setIcon(new ImageIcon());
		contenedor_top.setIcon(null);
		contenedor_top.setBorder(null);
		contenedor_top.setHorizontalAlignment(SwingConstants.CENTER);
		contenedor_top.setBackground(Color.WHITE);
		panel.add(contenedor_top);

		label_6 = new JLabel("");
		label_6.setBorder(null);
		label_6.setHorizontalAlignment(SwingConstants.CENTER);
		label_6.setBackground(Color.BLACK);
		panel.add(label_6);

		label_7 = new JLabel("");
		label_7.setBorder(null);
		label_7.setHorizontalAlignment(SwingConstants.CENTER);
		label_7.setBackground(Color.BLACK);
		panel.add(label_7);

		distractor_left = new JLabel("");
		distractor_left.setBorder(null);
		distractor_left.setHorizontalAlignment(SwingConstants.RIGHT);
		distractor_left.setBackground(Color.BLACK);
		panel.add(distractor_left);

		contenedor_left_2 = new JLabel("");
		contenedor_left_2.setIcon(null);
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
		contenedor_right.setIcon(null);
		contenedor_right.setBorder(null);
		panel.add(contenedor_right);

		distractor_right = new JLabel("");
		distractor_right.setHorizontalAlignment(SwingConstants.LEFT);
		distractor_right.setBorder(null);
		panel.add(distractor_right);

		lblNewLabel = new JLabel("");
		lblNewLabel.setBorder(null);
		panel.add(lblNewLabel);

		label_8 = new JLabel("");
		label_8.setBorder(null);
		label_8.setHorizontalAlignment(SwingConstants.CENTER);
		label_8.setBackground(Color.BLACK);
		panel.add(label_8);

		contenedor_bot = new JLabel("");
		contenedor_bot.setVerticalAlignment(SwingConstants.TOP);
		contenedor_bot.setIcon(null);
		contenedor_bot.setBorder(null);
		contenedor_bot.setHorizontalAlignment(SwingConstants.CENTER);
		contenedor_bot.setBackground(Color.BLACK);
		panel.add(contenedor_bot);

		lblNewLabel_1 = new JLabel("");
		lblNewLabel_1.setBorder(null);
		panel.add(lblNewLabel_1);

		lblNewLabel_2 = new JLabel("");
		lblNewLabel_2.setBorder(null);
		panel.add(lblNewLabel_2);

		lblNewLabel_3 = new JLabel("");
		lblNewLabel_3.setBorder(null);
		panel.add(lblNewLabel_3);

		lblNewLabel_4 = new JLabel("");
		lblNewLabel_4.setBorder(null);
		panel.add(lblNewLabel_4);

		distractor_bot = new JLabel("");
		distractor_bot.setHorizontalAlignment(SwingConstants.CENTER);
		distractor_bot.setHorizontalTextPosition(SwingConstants.CENTER);
		distractor_bot.setVerticalAlignment(SwingConstants.TOP);
		distractor_bot.setBorder(null);
		panel.add(distractor_bot);

		label_9 = new JLabel("");
		label_9.setBorder(null);
		panel.add(label_9);

		label_10 = new JLabel("");
		label_10.setBorder(null);
		panel.add(label_10);
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
}
