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

public class Index extends JFrame {

	private JPanel contentPane;

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
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 1314, 780);
		contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		contentPane.setLayout(new BorderLayout(0, 0));
		setContentPane(contentPane);
		
		JPanel panel = new JPanel();
		contentPane.add(panel, BorderLayout.CENTER);
		panel.setLayout(new GridLayout(3, 5, 0, 0));
		
		JLabel label = new JLabel("New label");
		label.setBorder(UIManager.getBorder("Table.focusCellHighlightBorder"));
		label.setHorizontalAlignment(SwingConstants.CENTER);
		label.setBackground(Color.BLACK);
		panel.add(label);
		
		JLabel label_1 = new JLabel("New label");
		label_1.setBorder(UIManager.getBorder("Table.focusCellHighlightBorder"));
		label_1.setHorizontalAlignment(SwingConstants.CENTER);
		label_1.setBackground(Color.BLACK);
		panel.add(label_1);
		
		JLabel label_5 = new JLabel("New label");
		label_5.setBorder(UIManager.getBorder("Table.focusCellHighlightBorder"));
		label_5.setHorizontalAlignment(SwingConstants.CENTER);
		label_5.setBackground(Color.BLACK);
		panel.add(label_5);
		
		JLabel label_8 = new JLabel("New label");
		label_8.setBorder(UIManager.getBorder("Table.focusCellHighlightBorder"));
		label_8.setHorizontalAlignment(SwingConstants.CENTER);
		label_8.setBackground(Color.BLACK);
		panel.add(label_8);
		
		JLabel label_7 = new JLabel("New label");
		label_7.setBorder(UIManager.getBorder("Table.focusCellHighlightBorder"));
		label_7.setHorizontalAlignment(SwingConstants.CENTER);
		label_7.setBackground(Color.BLACK);
		panel.add(label_7);
		
		JLabel label_6 = new JLabel("New label");
		label_6.setBorder(UIManager.getBorder("Table.focusCellHighlightBorder"));
		label_6.setHorizontalAlignment(SwingConstants.CENTER);
		label_6.setBackground(Color.BLACK);
		panel.add(label_6);
		
		JLabel label_4 = new JLabel("New label");
		label_4.setBorder(UIManager.getBorder("Table.focusCellHighlightBorder"));
		label_4.setHorizontalAlignment(SwingConstants.CENTER);
		label_4.setBackground(Color.BLACK);
		panel.add(label_4);
		
		JLabel label_3 = new JLabel("+");
		label_3.setFont(new Font("SansSerif", Font.PLAIN, 40));
		label_3.setBorder(UIManager.getBorder("Table.focusCellHighlightBorder"));
		label_3.setHorizontalAlignment(SwingConstants.CENTER);
		label_3.setBackground(new Color(0, 255, 0));
		panel.add(label_3);
		
		JLabel label_2 = new JLabel("New label");
		label_2.setBorder(UIManager.getBorder("Table.focusCellHighlightBorder"));
		label_2.setHorizontalAlignment(SwingConstants.CENTER);
		label_2.setBackground(Color.BLACK);
		panel.add(label_2);
		
		JLabel label_9 = new JLabel("New label");
		label_9.setBorder(UIManager.getBorder("Table.focusCellHighlightBorder"));
		label_9.setHorizontalAlignment(SwingConstants.CENTER);
		label_9.setBackground(Color.BLACK);
		panel.add(label_9);
		
		JLabel label_11 = new JLabel("New label");
		label_11.setBorder(UIManager.getBorder("Table.focusCellHighlightBorder"));
		label_11.setHorizontalAlignment(SwingConstants.CENTER);
		label_11.setBackground(Color.BLACK);
		panel.add(label_11);
		
		JLabel label_10 = new JLabel("New label");
		label_10.setBorder(UIManager.getBorder("Table.focusCellHighlightBorder"));
		label_10.setHorizontalAlignment(SwingConstants.CENTER);
		label_10.setBackground(Color.BLACK);
		panel.add(label_10);
		
		JLabel lblNewLabel = new JLabel("New label");
		lblNewLabel.setBorder(UIManager.getBorder("Table.focusCellHighlightBorder"));
		lblNewLabel.setHorizontalAlignment(SwingConstants.CENTER);
		lblNewLabel.setBackground(Color.BLACK);
		panel.add(lblNewLabel);
		
		JLabel label_12 = new JLabel("New label");
		label_12.setBorder(UIManager.getBorder("Table.focusCellHighlightBorder"));
		label_12.setHorizontalAlignment(SwingConstants.CENTER);
		label_12.setBackground(Color.BLACK);
		panel.add(label_12);
		
		JLabel label_13 = new JLabel("New label");
		label_13.setBorder(UIManager.getBorder("Table.focusCellHighlightBorder"));
		label_13.setHorizontalAlignment(SwingConstants.CENTER);
		label_13.setBackground(Color.BLACK);
		panel.add(label_13);
	}
}
