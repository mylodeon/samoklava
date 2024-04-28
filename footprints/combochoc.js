// Kailh Choc PG1350
// Nets
//    from: corresponds to pin 1
//    to: corresponds to pin 2
// Params
//    hotswap: default is false
//      if true, will include holes and pads for Kailh choc hotswap sockets
//    reverse: default is false
//      if true, will flip the footprint such that the pcb can be reversible
//    keycaps: default is false
//      if true, will add choc sized keycap box around the footprint
// 
// note: hotswap and reverse can be used simultaneously

module.exports = {
  params: {
    designator: 'S',
    hotswap: false,
    reverse: false,
    keycaps: false,
    from: undefined,
    to: undefined,
    to2: undefined
  },
  body: p => {
    const standard = `
      (module PG1350 (layer F.Cu) (tedit 5DD50112)
      ${p.at /* parametric position */}

      ${'' /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
      (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

      ${''/* corner marks */}
      (fp_line (start -7 -6) (end -7 -7) (layer Dwgs.User) (width 0.15))
      (fp_line (start -7 7) (end -6 7) (layer Dwgs.User) (width 0.15))
      (fp_line (start -6 -7) (end -7 -7) (layer Dwgs.User) (width 0.15))
      (fp_line (start -7 7) (end -7 6) (layer Dwgs.User) (width 0.15))
      (fp_line (start 7 6) (end 7 7) (layer Dwgs.User) (width 0.15))
      (fp_line (start 7 -7) (end 6 -7) (layer Dwgs.User) (width 0.15))
      (fp_line (start 6 7) (end 7 7) (layer Dwgs.User) (width 0.15))
      (fp_line (start 7 -7) (end 7 -6) (layer Dwgs.User) (width 0.15))      
      
      ${''/* middle shaft */}
      (pad "" np_thru_hole circle (at 0 0) (size 3.429 3.429) (drill 3.429) (layers *.Cu *.Mask))
        
      ${''/* stabilizers */}
      (pad "" np_thru_hole circle (at 5.5 0) (size 1.7018 1.7018) (drill 1.7018) (layers *.Cu *.Mask))
      (pad "" np_thru_hole circle (at -5.5 0) (size 1.7018 1.7018) (drill 1.7018) (layers *.Cu *.Mask))
      `
    const keycap = `
      ${'' /* keycap marks */}
      (fp_line (start -9 -8.5) (end 9 -8.5) (layer Dwgs.User) (width 0.15))
      (fp_line (start 9 -8.5) (end 9 8.5) (layer Dwgs.User) (width 0.15))
      (fp_line (start 9 8.5) (end -9 8.5) (layer Dwgs.User) (width 0.15))
      (fp_line (start -9 8.5) (end -9 -8.5) (layer Dwgs.User) (width 0.15))
      `

    function diode_horizontal(x, y) {
    return `
        ${p.at /* parametric position */}

        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at ${x + 0} ${y + 0}) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value "" (at ${x + 0} ${y + 0}) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
        
        ${''/* diode symbols */}
        (fp_line (start ${x + 0.25}  ${y + 0.4} ) (end ${x + -0.35} ${y + 0}    ) (layer F.SilkS) (width 0.1))
        (fp_line (start ${x + 0.25}  ${y + 0}   ) (end ${x + 0.75}  ${y + 0}    ) (layer F.SilkS) (width 0.1))
        (fp_line (start ${x + 0.25}  ${y + -0.4}) (end ${x + 0.25}  ${y + 0.4}  ) (layer F.SilkS) (width 0.1))
        (fp_line (start ${x + -0.35} ${y + 0}   ) (end ${x + 0.25}  ${y + -0.4} ) (layer F.SilkS) (width 0.1))
        (fp_line (start ${x + -0.35} ${y + 0}   ) (end ${x + -0.35} ${y + 0.55} ) (layer F.SilkS) (width 0.1))
        (fp_line (start ${x + -0.35} ${y + 0}   ) (end ${x + -0.35} ${y + -0.55}) (layer F.SilkS) (width 0.1))
        (fp_line (start ${x + -0.75} ${y + 0}   ) (end ${x + -0.35} ${y + 0}    ) (layer F.SilkS) (width 0.1))
        (fp_line (start ${x + 0.25}  ${y + 0}   ) (end ${x + 0.75}  ${y + 0}    ) (layer B.SilkS) (width 0.1))
        (fp_line (start ${x + 0.25}  ${y + 0}   ) (end ${x + 0.75}  ${y + 0}    ) (layer B.SilkS) (width 0.1))
        (fp_line (start ${x + 0.25}  ${y + 0.4} ) (end ${x + -0.35} ${y + 0}    ) (layer B.SilkS) (width 0.1))
        (fp_line (start ${x + 0.25}  ${y + -0.4}) (end ${x + 0.25}  ${y + 0.4}  ) (layer B.SilkS) (width 0.1))
        (fp_line (start ${x + -0.35} ${y + 0}   ) (end ${x + 0.25}  ${y + -0.4} ) (layer B.SilkS) (width 0.1))
        (fp_line (start ${x + -0.35} ${y + 0}   ) (end ${x + -0.35} ${y + 0.55} ) (layer B.SilkS) (width 0.1))
        (fp_line (start ${x + -0.35} ${y + 0}   ) (end ${x + -0.35} ${y + -0.55}) (layer B.SilkS) (width 0.1))
        (fp_line (start ${x + -0.75} ${y + 0}   ) (end ${x + -0.35} ${y + 0}    ) (layer B.SilkS) (width 0.1))
    
        ${''/* SMD pads on both sides */}
        (pad 1 smd rect (at ${x + -1.65} ${y + 0} ${p.rot}) (size 0.9 1.2) (layers F.Cu F.Paste F.Mask) ${p.from.str})
        (pad 2 smd rect (at ${x + 1.65} ${y + 0} ${p.rot}) (size 0.9 1.2) (layers B.Cu B.Paste B.Mask) ${p.to2.str})
        (pad 1 smd rect (at ${x + -1.65} ${y + 0} ${p.rot}) (size 0.9 1.2) (layers B.Cu B.Paste B.Mask) ${p.from.str})
        (pad 2 smd rect (at ${x + 1.65} ${y + 0} ${p.rot}) (size 0.9 1.2) (layers F.Cu F.Paste F.Mask) ${p.to2.str})
        
        ${''/* THT terminals */}
        (pad 1 thru_hole rect (at ${x + -3.81} ${y + 0} ${p.rot}) (size 2.032 2.032) (drill 0.9906) (layers *.Cu *.Mask) ${p.from.str})
        (pad 2 thru_hole circle (at ${x + 3.81} ${y + 0} ${p.rot}) (size 1.905 1.905) (drill 0.9906) (layers *.Cu *.Mask) ${p.to2.str})
    `
    }
    function diode_vertical(x, y) {
        return `
        ${p.at /* parametric position */}

        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at ${x + 0} ${y + 0}) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value "" (at ${x + 0} ${y + 0}) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
        
        ${''/* diode symbols */}
        (fp_line (start ${x + 0.4}  ${y + 0.25}  ) (end ${x + 0}     ${y + -0.35} ) (layer F.SilkS) (width 0.1))
        (fp_line (start ${x + 0}    ${y + 0.25}  ) (end ${x + 0}     ${y + 0.75}  ) (layer F.SilkS) (width 0.1))
        (fp_line (start ${x + -0.4} ${y + 0.25}  ) (end ${x + 0.4}   ${y + 0.25}  ) (layer F.SilkS) (width 0.1))
        (fp_line (start ${x + 0}    ${y + -0.35} ) (end ${x + -0.4}  ${y + 0.25}  ) (layer F.SilkS) (width 0.1))
        (fp_line (start ${x + 0}    ${y + -0.35} ) (end ${x + 0.55}  ${y + -0.35} ) (layer F.SilkS) (width 0.1))
        (fp_line (start ${x + 0}    ${y + -0.35} ) (end ${x + -0.55} ${y + -0.35} ) (layer F.SilkS) (width 0.1))
        (fp_line (start ${x + 0}    ${y + -0.75} ) (end ${x + 0}     ${y + -0.35} ) (layer F.SilkS) (width 0.1))
        (fp_line (start ${x + 0}    ${y + 0.25}  ) (end ${x + 0}     ${y + 0.75}  ) (layer B.SilkS) (width 0.1))
        (fp_line (start ${x + 0}    ${y + 0.25}  ) (end ${x + 0}     ${y + 0.75}  ) (layer B.SilkS) (width 0.1))
        (fp_line (start ${x + 0.4}  ${y + 0.25}  ) (end ${x + 0}     ${y + -0.35} ) (layer B.SilkS) (width 0.1))
        (fp_line (start ${x + -0.4} ${y + 0.25}  ) (end ${x + 0.4}   ${y + 0.25}  ) (layer B.SilkS) (width 0.1))
        (fp_line (start ${x + 0}    ${y + -0.35} ) (end ${x + -0.4}  ${y + 0.25}  ) (layer B.SilkS) (width 0.1))
        (fp_line (start ${x + 0}    ${y + -0.35} ) (end ${x + 0.55}  ${y + -0.35} ) (layer B.SilkS) (width 0.1))
        (fp_line (start ${x + 0}    ${y + -0.35} ) (end ${x + -0.55} ${y + -0.35} ) (layer B.SilkS) (width 0.1))
        (fp_line (start ${x + 0}    ${y + -0.75} ) (end ${x + 0}     ${y + -0.35} ) (layer B.SilkS) (width 0.1))
    
        ${''/* SMD pads on both sides */}
        (pad 1 smd rect (at ${x + 0} ${y + -1.65} ${p.rot}) (size 0.9 1.2) (layers F.Cu F.Paste F.Mask) ${p.to2.str} (clearance 0.1) (zone_connect 0) (options (clearance outline) (anchor rect)))
        (pad 2 smd rect (at ${x + 0} ${y + 1.65} ${p.rot}) (size 0.9 1.2) (layers B.Cu B.Paste B.Mask) ${p.to.str} (clearance 0.1) (zone_connect 0) (options (clearance outline) (anchor rect)))
        (pad 1 smd rect (at ${x + 0} ${y - 1.65} ${p.rot}) (size 0.9 1.2) (layers B.Cu B.Paste B.Mask) ${p.to2.str} (clearance 0.1) (zone_connect 0) (options (clearance outline) (anchor rect)))
        (pad 2 smd rect (at ${x + 0} ${y + 1.65} ${p.rot}) (size 0.9 1.2) (layers F.Cu F.Paste F.Mask) ${p.to.str} (clearance 0.1) (zone_connect 0) (options (clearance outline) (anchor rect)))
        
        ${''/* THT terminals */}
        (pad 1 thru_hole rect (at ${x + 0} ${y + -3.81} ${p.rot}) (size 2.032 2.032) (drill 0.9906) (layers *.Cu *.Mask) ${p.to2.str} (clearance 0.1) (zone_connect 0) (options (clearance outline) (anchor rect)))
        (pad 2 thru_hole circle (at ${x + 0} ${y + 3.81} ${p.rot}) (size 1.905 1.905) (drill 0.9906) (layers *.Cu *.Mask)  ${p.to.str} (clearance 0.1) (zone_connect 0) (options (clearance outline) (anchor rect)))
    `
    }

      function pins(def_neg, def_pos, def_side) {
          return `
          ${'' /* holes */}
          (pad "" np_thru_hole circle (at ${def_pos}5 -3.75) (size 3 3) (drill 3) (layers *.Cu *.Mask))
          (pad "" np_thru_hole circle (at 0 -5.95) (size 3 3) (drill 3) (layers *.Cu *.Mask))
      
          ${'' /* net pads */}
          (pad 1 smd rect (at ${def_neg}3.275 -5.95 ${p.rot}) (size 2.6 2.6) (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask)  ${p.from.str} (clearance 0.1) (zone_connect 0) (options (clearance outline) (anchor rect)))
          (pad 2 smd rect (at ${def_pos}8.275 -3.75 ${p.rot}) (size 2.6 2.6) (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask) ${p.to2.str} (clearance 0.1) (zone_connect 0) (options (clearance outline) (anchor rect)) )

          (pad 5 smd custom (at 0 0 ${p.rot}) (size 0.25 0.25) (layers ${def_side}.Cu) ${p.from.str}
            (zone_connect 0)
            (options (clearance outline) (anchor circle))
            (primitives
            (gr_line (start ${def_neg}2.275 -5.95) (end ${def_neg}2.275 -1) (width 0.25))
            (gr_line (start ${def_neg}2.275 -1) (end ${def_neg}5 3.8) (width 0.25))
          ))

          ${''/* pins */}
          (pad 3 thru_hole circle (at ${def_pos}5 3.8) (size 2.032 2.032) (drill 1.27) (layers *.Cu *.Mask) ${p.from.str})
          (pad 4 thru_hole circle (at ${def_pos}0 5.9 ${p.rot}) (size 2.032 2.032) (drill 1.27) (layers *.Cu *.Mask) ${p.to2.str})
        `
    }
    function back_pins(def_neg, def_pos, def_side) {
        return `
        (pad 6 smd custom (at 0 0 ${p.rot}) (size 0.25 0.25) (layers ${def_side}.Cu) ${p.from.str}
        (zone_connect 0)
        (options (clearance outline) (anchor circle))
        (primitives
        (gr_line (start ${def_neg}5 3.8) (end ${def_pos}5 3.8) (width 0.25))
        ))

        (pad 7 smd custom (at 0 0 ${p.rot}) (size 0.25 0.25) (layers ${def_side}.Cu) ${p.to2.str}
        (zone_connect 0)
        (options (clearance outline) (anchor circle))
        (primitives
        (gr_line (start ${def_pos}7.6 -3.75) (end ${def_pos}7.6 3.75) (width 0.25))
        (gr_line (start ${def_pos}7.6 3.75) (end ${def_pos}5 5.9) (width 0.25))
        (gr_line (start ${def_pos}5 5.9) (end ${def_pos}0 5.9) (width 0.25))
        ))

        (pad 8 smd custom (at 0 0 ${p.rot}) (size 0.25 0.25) (layers ${def_side}.Cu) ${p.to2.str}
        (zone_connect 0)
        (options (clearance outline) (anchor circle))
        (primitives
        (gr_line (start ${def_neg}7.75 0) (end ${def_neg}7.75 2.5) (width 0.25))
        ))
        `
    }
    function front_pins(def_neg, def_pos, def_side) {
          return `
        (pad 8 smd custom (at 0 0 ${p.rot}) (size 0.25 0.25) (layers ${def_side}.Cu) ${p.to2.str}
        (zone_connect 0)
        (options (clearance outline) (anchor circle))
        (primitives
        (gr_line (start ${def_neg}7.6 -3.75) (end ${def_neg}7.6 3.75) (width 0.25))
        (gr_line (start ${def_neg}7.6 3.75) (end ${def_neg}5 5.9) (width 0.25))
        (gr_line (start ${def_neg}5 5.9) (end ${def_neg}0 5.9) (width 0.25))
        ))
        `
    }

    if (p.reverse) {
        return `
        ${standard}
        ${p.keycaps ? keycap : ''}
        ${diode_vertical(-8,4)}
        ${back_pins('-', '', 'B')}
        ${front_pins('-', '', 'F')}
        ${pins('-', '', 'B')}
        ${pins('', '-', 'F')})
        `
    } else {
      return `
        ${standard}
        ${p.keycaps ? keycap : ''}
        ${diode_vertical(8, 4)}
        ${front_pins('-', '', 'F')}
        ${pins('-', '', 'B')})
        `
    }
  }
}