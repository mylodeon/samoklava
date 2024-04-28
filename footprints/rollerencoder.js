// Ardui    no ProMicro atmega32u4au
// Params
//  orientation: default is down
//    if down, power led will face the pcb
//    if up, power led will face away from pcb

module.exports = {
  params: {
    designator: 'RLE',
    orientation: 'down',
    from: {type: 'net', value: 'from'},
    to: { type: 'net', value: 'to'},
    A: {type: 'net', value: 'A'},
    B: {type: 'net', value: 'B'},
    CMN: {type: 'net', value: 'CMN'},
    NC: {type: 'net', value: 'NC'},
  },
  body: p => `
      (module rollerencoder (layer F.Cu) (tedit 5B307E4C)
        ${p.at /* parametric position */}

        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at 4.064 5.04 0) (layer F.Fab) 
            ${p.ref_hide} (effects (font (size 1 1) (thickness 0.15))))

        (attr through_hole)
        (fp_text reference "${p.ref}" (at 0 0) (layer F.Fab)
          (effects (font (size 1 1) (thickness 0.15)))
        )
        (fp_text value RollerEncoder_Panasonic_EVQWGD001 (at -0.1 9) (layer F.Fab)
          (effects (font (size 1 1) (thickness 0.15)))
        )
        (fp_line (start -8.5 5.5) (end -8.5 7.5) (layer F.SilkS) (width 0.2))
        (fp_line (start -8.4 -6.4) (end 8.4 -6.4) (layer Dwgs.User) (width 0.12))
        (fp_line (start 8.4 -6.4) (end 8.4 7.4) (layer Dwgs.User) (width 0.12))
        (fp_line (start 8.4 7.4) (end -8.4 7.4) (layer Dwgs.User) (width 0.12))
        (fp_line (start -8.4 7.4) (end -8.4 -6.4) (layer Dwgs.User) (width 0.12))
        (fp_line (start 9.8 7.3) (end 9.8 -6.3) (layer Edge.Cuts) (width 0.05))
        (fp_line (start 7.4 -6.3) (end 7.4 7.3) (layer Edge.Cuts) (width 0.05))
        (fp_line (start 6.9 -6.5) (end -4 -6.5) (layer F.SilkS) (width 0.2))
        (fp_line (start -7.9 -6.5) (end -8.5 -6.5) (layer F.SilkS) (width 0.2))
        (fp_line (start -8.5 -6.5) (end -8.5 -4.5) (layer F.SilkS) (width 0.2))
        (fp_line (start -8.5 7.5) (end 6.9 7.5) (layer F.SilkS) (width 0.2))
        (fp_line (start 9.5 -6.6) (end 7.7 -6.6) (layer Edge.Cuts) (width 0.05))
        (fp_line (start 7.7 7.6) (end 9.5 7.6) (layer Edge.Cuts) (width 0.05))
        (fp_arc (start 7.7 7.3) (end 7.4 7.3) (angle -90) (layer Edge.Cuts) (width 0.05))
        (fp_arc (start 9.5 7.3) (end 9.5 7.6) (angle -90) (layer Edge.Cuts) (width 0.05))
        (fp_arc (start 7.7 -6.3) (end 7.7 -6.6) (angle -90) (layer Edge.Cuts) (width 0.05))
        (fp_arc (start 9.5 -6.3) (end 9.8 -6.3) (angle -90) (layer Edge.Cuts) (width 0.05))
        (fp_text user %R (at -2.4 -7.3) (layer F.SilkS)
          (effects (font (size 0.8 0.8) (thickness 0.2)))
        )
        (pad S1 thru_hole circle (at -6.85 -6.2) (size 1.6 1.6) (drill 0.9) (layers *.Cu *.Mask) ${p.from.str} )
        (pad S2 thru_hole circle (at -5 -6.2) (size 1.6 1.6) (drill 0.9) (layers *.Cu *.Mask) ${p.to.str})
        (pad CMN thru_hole circle (at -5.625 -3.81) (size 1.6 1.6) (drill 0.9) (layers *.Cu *.Mask) ${p.CMN.str})
        (pad A thru_hole circle (at -5.625 -1.27) (size 1.6 1.6) (drill 0.9) (layers *.Cu *.Mask) ${p.A.str})
        (pad B thru_hole circle (at -5.625 1.27) (size 1.6 1.6) (drill 0.9) (layers *.Cu *.Mask) ${p.B.str})
        (pad NC thru_hole circle (at -5.625 3.81) (size 1.6 1.6) (drill 0.9) (layers *.Cu *.Mask) ${p.NC.str})
        (pad "" np_thru_hole circle (at -5.625 6.3) (size 1.5 1.5) (drill 1.5) (layers *.Cu *.Mask) )
    )
    `
}