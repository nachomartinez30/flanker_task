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

public class Index extends JFrame  implements KeyListener{
    
    
	private JPanel contentPane;
	private JLabel contenedor_top;
	private JLabel contenedor_right;
	private JLabel contenedor_bot;
	private JLabel contenedor_left;

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
				System.out.println(event.getExtendedKeyCode());
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
		label.setBorder(UIManager.getBorder("TitledBorder.border"));
		label.setHorizontalAlignment(SwingConstants.CENTER);
		label.setBackground(Color.BLACK);
		panel.add(label);

		JLabel label_1 = new JLabel("");
		label_1.setBorder(UIManager.getBorder("TitledBorder.border"));
		label_1.setHorizontalAlignment(SwingConstants.CENTER);
		label_1.setBackground(Color.BLACK);
		panel.add(label_1);

		JLabel label_5 = new JLabel("");
		label_5.setBorder(UIManager.getBorder("TitledBorder.border"));
		label_5.setHorizontalAlignment(SwingConstants.CENTER);
		label_5.setBackground(Color.BLACK);
		panel.add(label_5);

		JLabel label_8 = new JLabel("");
		label_8.setBorder(UIManager.getBorder("TitledBorder.border"));
		label_8.setHorizontalAlignment(SwingConstants.CENTER);
		label_8.setBackground(Color.BLACK);
		panel.add(label_8);

		JLabel label_7 = new JLabel("");
		label_7.setBorder(UIManager.getBorder("TitledBorder.border"));
		label_7.setHorizontalAlignment(SwingConstants.CENTER);
		label_7.setBackground(Color.BLACK);
		panel.add(label_7);

		JLabel label_6 = new JLabel("");
		label_6.setBorder(UIManager.getBorder("TitledBorder.border"));
		label_6.setHorizontalAlignment(SwingConstants.CENTER);
		label_6.setBackground(Color.BLACK);
		panel.add(label_6);

		JLabel label_4 = new JLabel("");
		label_4.setBorder(UIManager.getBorder("TitledBorder.border"));
		label_4.setHorizontalAlignment(SwingConstants.CENTER);
		label_4.setBackground(Color.BLACK);
		panel.add(label_4);

		contenedor_top = new JLabel("");
		contenedor_top.setVerticalAlignment(SwingConstants.BOTTOM);
		// lblBackground.setIcon(new ImageIcon());
		contenedor_top.setIcon(new ImageIcon(Index.class.getResource("/img/contenedor.png")));
		contenedor_top.setBorder(UIManager.getBorder("TitledBorder.border"));
		contenedor_top.setHorizontalAlignment(SwingConstants.CENTER);
		contenedor_top.setBackground(Color.WHITE);
		panel.add(contenedor_top);

		JLabel label_9 = new JLabel("");
		label_9.setBorder(UIManager.getBorder("TitledBorder.border"));
		label_9.setHorizontalAlignment(SwingConstants.CENTER);
		label_9.setBackground(Color.BLACK);
		panel.add(label_9);

		JLabel label_11 = new JLabel("");
		label_11.setBorder(UIManager.getBorder("TitledBorder.border"));
		label_11.setHorizontalAlignment(SwingConstants.CENTER);
		label_11.setBackground(Color.BLACK);
		panel.add(label_11);

		JLabel label_10 = new JLabel("");
		label_10.setBorder(UIManager.getBorder("TitledBorder.border"));
		label_10.setHorizontalAlignment(SwingConstants.CENTER);
		label_10.setBackground(Color.BLACK);
		panel.add(label_10);

		contenedor_right = new JLabel("");
		contenedor_right.setIcon(new ImageIcon(Index.class.getResource("/img/contenedor.png")));
		contenedor_right.setHorizontalTextPosition(SwingConstants.RIGHT);
		contenedor_right.setBorder(UIManager.getBorder("TitledBorder.border"));
		contenedor_right.setHorizontalAlignment(SwingConstants.RIGHT);
		contenedor_right.setBackground(Color.BLACK);
		panel.add(contenedor_right);

		JLabel label_3 = new JLabel("+");
		label_3.addKeyListener(new KeyAdapter() {
			@Override
			public void keyPressed(KeyEvent event) {
//				char ch = event.getKeyChar();

				System.out.println(event.getKeyChar());
			}
		});
		label_3.setForeground(Color.BLACK);
		label_3.setFont(new Font("SansSerif", Font.PLAIN, 40));
		label_3.setBorder(UIManager.getBorder("TitledBorder.border"));
		label_3.setHorizontalAlignment(SwingConstants.CENTER);
		label_3.setBackground(new Color(0, 255, 0));
		panel.add(label_3);

		contenedor_left = new JLabel("");
		contenedor_left.setHorizontalAlignment(SwingConstants.LEFT);
		contenedor_left.setIcon(new ImageIcon(Index.class.getResource("/img/contenedor.png")));
		contenedor_left.setBorder(UIManager.getBorder("TitledBorder.border"));
		panel.add(contenedor_left);

		JLabel lblNewLabel_1 = new JLabel("");
		lblNewLabel_1.setBorder(UIManager.getBorder("TitledBorder.border"));
		panel.add(lblNewLabel_1);

		JLabel lblNewLabel_2 = new JLabel("");
		lblNewLabel_2.setBorder(UIManager.getBorder("TitledBorder.border"));
		panel.add(lblNewLabel_2);

		JLabel label_12 = new JLabel("");
		label_12.setBorder(UIManager.getBorder("TitledBorder.border"));
		label_12.setHorizontalAlignment(SwingConstants.CENTER);
		label_12.setBackground(Color.BLACK);
		panel.add(label_12);

		contenedor_bot = new JLabel("");
		contenedor_bot.setVerticalAlignment(SwingConstants.TOP);
		contenedor_bot.setIcon(new ImageIcon(Index.class.getResource("/img/contenedor.png")));
		contenedor_bot.setBorder(UIManager.getBorder("TitledBorder.border"));
		contenedor_bot.setHorizontalAlignment(SwingConstants.CENTER);
		contenedor_bot.setBackground(Color.BLACK);
		panel.add(contenedor_bot);

		JLabel lblNewLabel_3 = new JLabel("");
		lblNewLabel_3.setBorder(UIManager.getBorder("TitledBorder.border"));
		panel.add(lblNewLabel_3);

		JLabel lblNewLabel_4 = new JLabel("");
		lblNewLabel_4.setBorder(UIManager.getBorder("TitledBorder.border"));
		panel.add(lblNewLabel_4);

		JLabel lblNewLabel_5 = new JLabel("");
		lblNewLabel_5.setBorder(UIManager.getBorder("TitledBorder.border"));
		panel.add(lblNewLabel_5);

		JLabel lblNewLabel_7 = new JLabel("");
		lblNewLabel_7.setBorder(UIManager.getBorder("TitledBorder.border"));
		panel.add(lblNewLabel_7);

		JLabel label_14 = new JLabel("");
		label_14.setBorder(UIManager.getBorder("TitledBorder.border"));
		panel.add(label_14);

		JLabel label_15 = new JLabel("");
		label_15.setBorder(UIManager.getBorder("TitledBorder.border"));
		panel.add(label_15);

		JLabel label_16 = new JLabel("");
		label_16.setBorder(UIManager.getBorder("TitledBorder.border"));
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
}
