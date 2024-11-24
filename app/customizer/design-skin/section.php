<?php
/**
 * @package snow-monkey
 * @author inc2734
 * @license GPL-2.0+
 * @version 20.1.1
 */

use Inc2734\WP_Customizer_Framework\Framework;

if ( ! is_customize_preview() ) {
	return;
}

Framework::section(
	'design-skin',
	array(
		'title'    => __( 'Design skin', 'snow-monkey' ),
		'priority' => 1030,
	)
);
