// 4 way pst switch
//

module.exports = {
    params: {
        designator: 'S',
        UP: undefined,
        DN: undefined,
        LT: undefined,
        RT: undefined,
        CMN: undefined,
        model: './3d/04A-K01.stp'
    },
    body: p => `
        (module 4pst_switch (layer F.Cu) (tedit 603326DE)

            ${p.at /* parametric position */}
        
            ${'' /* footprint reference */}
            (fp_text reference "${p.ref}" (at 0 0.5) (layer F.SilkS) 
                ${p.ref_hide} (effects (font (size 1 1) (thickness 0.15))))

            (fp_text value "04AK01" (at 0.000 -0) (layer F.SilkS) hide
                (effects (font (size 1.27 1.27) (thickness 0.254))))

            ${''/* component outline */}
            (fp_line (start -10.795 -10.795) (end 10.795 -10.795) (layer F.Fab) (width 0.1))
            (fp_line (start 10.795 -10.795) (end 10.795 10.795) (layer F.Fab) (width 0.1))
            (fp_line (start 10.795 10.795) (end -10.795 10.795) (layer F.Fab) (width 0.1))
            (fp_line (start -10.795 10.795) (end -10.795 -10.795) (layer F.Fab) (width 0.1))
            (fp_line (start -10.795 -10.795) (end 10.795 -10.795) (layer F.SilkS) (width 0.2))
            (fp_line (start 10.795 -10.795) (end 10.795 10.795) (layer F.SilkS) (width 0.2))
            (fp_line (start 10.795 10.795) (end -10.795 10.795) (layer F.SilkS) (width 0.2))
            (fp_line (start -10.795 10.795) (end -10.795 -10.795) (layer F.SilkS) (width 0.2))
            (fp_line (start -11.795 -11.795) (end 11.795 -11.795) (layer F.CrtYd) (width 0.1))
            (fp_line (start 11.795 -11.795) (end 11.795 11.795) (layer F.CrtYd) (width 0.1))
            (fp_line (start 11.795 11.795) (end -11.795 11.795) (layer F.CrtYd) (width 0.1))
            (fp_line (start -11.795 11.795) (end -11.795 -11.795) (layer F.CrtYd) (width 0.1))
            (fp_line (start -11.4 -0) (end -11.4 -0) (layer F.SilkS) (width 0.1))
            (fp_line (start -11.3 -0) (end -11.3 -0) (layer F.SilkS) (width 0.1))
            (fp_arc (start -11.35 -0) (end -11.400 -0) (angle -180) (layer F.SilkS) (width 0.1))
            (fp_arc (start -11.35 -0) (end -11.300 -0) (angle -180) (layer F.SilkS) (width 0.1))

            ${''/* pin names */}
            (pad CMN thru_hole rect (at 0.000 -0) (size 1.830 1.830) (drill 1.22) (layers *.Cu *.Mask) ${p.CMN.str})
            (pad UP thru_hole circle (at -6.350 -0) (size 1.830 1.830) (drill 1.22) (layers *.Cu *.Mask) ${p.UP.str})
            (pad RT thru_hole circle (at 0.000 6.35) (size 1.830 1.830) (drill 1.22) (layers *.Cu *.Mask) ${p.RT.str})
            (pad DN thru_hole circle (at 6.350 -0) (size 1.830 1.830) (drill 1.22) (layers *.Cu *.Mask) ${p.DN.str})
            (pad LT thru_hole circle (at 0.000 -6.35) (size 1.830 1.830) (drill 1.22) (layers *.Cu *.Mask) ${p.LT.str})

            (model ${p.model}
                (at (xyz 0 0 0))
                (scale (xyz 1 1 1))
                (rotate (xyz 0 0 0))
            )
        )
    `
}

