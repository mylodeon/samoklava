// Ardui    no ProMicro atmega32u4au
// Params
//  orientation: default is down
//    if down, power led will face the pcb
//    if up, power led will face away from pcb

module.exports = {
  params: {
    designator: 'DEB',
    orientation: 'down',
    GND1: {type: 'net', value: 'GND1'},
    GND2: {type: 'net', value: 'GND2'},
    VCC1: {type: 'net', value: 'VCC1'},
    VCC2: {type: 'net', value: 'VCC2'},
    RE1: {type: 'net', value: 'RE1'},
    RE2: {type: 'net', value: 'RE2'},
    RE3: {type: 'net', value: 'RE3'},
    RE4: {type: 'net', value: 'RE4'},
    MCU1: {type: 'net', value: 'MCU1'},
    MCU2: {type: 'net', value: 'MCU2'},
    C1: { type: 'net', value: 'C1' },
    C4: { type: 'net', value: 'C4' },
  },
  body: p => `
      (module Ec11Debounce (layer F.Cu) (tedit 5B307E4C)
        ${p.at /* parametric position */}

        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at 4.064 5.04 0) (layer F.Fab) 
            ${p.ref_hide} (effects (font (size 1 1) (thickness 0.15))))

        (attr through_hole)
        (fp_line (start -5.596 -1.46) (end -5.588 1.124)
          (stroke (width 0.2) (type default)) (layer "B.Cu")(uuid "ea00f093-9cf6-489b-9f5f-58e6cf1da993"))
        (fp_line (start -3.056 -1.46) (end -5.596 -1.46)
          (stroke (width 0.2) (type default)) (layer "B.Cu")(uuid "3737e989-78c5-4fbc-bfed-fc50525c9e44"))
        (fp_line (start -0.516 -1.46) (end 2.024 -1.46)
          (stroke (width 0.2) (type default)) (layer "B.Cu")(uuid "91b552d4-e645-461d-93e9-68b050e94fb5"))
        (fp_line (start 1.632 1.524) (end 0 1.524)
          (stroke (width 0.2) (type default)) (layer "B.Cu")(uuid "b59ed751-1d69-4086-9286-e9d9e98eaa47"))
        (fp_line (start 7.104 -1.46) (end 4.564 -1.46)
          (stroke (width 0.2) (type default)) (layer "B.Cu")(uuid "510d27b3-f462-414b-b59b-c0dccb6d0c79"))
        (fp_line (start 7.104 -1.46) (end 7.112 1.016)
          (stroke (width 0.2) (type default)) (layer "B.Cu")(uuid "1c1c3257-bc58-4a69-9903-a2fe8833bf2d"))

      
        (pad "C1" thru_hole circle (at -5.588 1.524) (size 1.6 1.6) (drill 0.8) (layers "*.Cu" "*.Mask")(remove_unused_layers no)      
      (uuid "fc8a7c5f-9942-4cdc-8e3e-5cf40f507d8e") ${p.C1.str}
        )
        (pad "C4" thru_hole circle (at 7.032 1.524) (size 1.6 1.6) (drill 0.8) (layers "*.Cu" "*.Mask")(remove_unused_layers no)
      (uuid "e4b6879a-5300-4c6d-9fd2-58386637887f") ${p.C4.str}
        )
        (pad "GND1" thru_hole circle (at -0.588 1.524) (size 1.6 1.6) (drill 0.8) (layers "*.Cu" "*.Mask")(remove_unused_layers no)
      (uuid "78cc5f78-511d-479a-973b-edb918f2acca") ${p.GND1.str}
        )
        (pad "GND2" thru_hole circle (at 2.032 1.524) (size 1.6 1.6) (drill 0.8) (layers "*.Cu" "*.Mask")(remove_unused_layers no)
      (uuid "6a7900b5-fa5e-46eb-9505-7a45c33c3a0f") ${p.GND2.str}
        )      
      
        (pad "MCU1" thru_hole rect
            (at -8.136 -1.46)
            (size 1.6 1.6)
            (drill 0.8)
            (layers "*.Cu" "*.Mask")
            (remove_unused_layers no)
            (uuid "01a70e7e-c570-4114-ab38-210e6c7b2bbe")
            ${p.MCU1.str}
        )
        (pad "MCU2" thru_hole oval
            (at 9.644 -1.46)
            (size 1.6 1.6)
            (drill 0.8)
            (layers "*.Cu" "*.Mask")
            (remove_unused_layers no)
            (uuid "934ca190-b812-4aff-a8a0-b1873174b46d")
            ${p.MCU2.str}
        )
        (pad "RE1" thru_hole oval
            (at -5.596 -1.46)
            (size 1.6 1.6)
            (drill 0.8)
            (layers "*.Cu" "*.Mask")
            (remove_unused_layers no)
            (uuid "f4b158ab-5bf0-4685-bfda-11286fa6d01b")
            ${p.RE1.str}
        )
        (pad "RE2" thru_hole oval
            (at -3.056 -1.46)
            (size 1.6 1.6)
            (drill 0.8)
            (layers "*.Cu" "*.Mask")
            (remove_unused_layers no)
            (uuid "364cbe55-dc92-4750-8589-bacf9ef2bc59")
            ${p.RE2.str}
        )
        (pad "RE3" thru_hole oval
            (at 4.564 -1.46)
            (size 1.6 1.6)
            (drill 0.8)
            (layers "*.Cu" "*.Mask")
            (remove_unused_layers no)
            (uuid "0454ee4d-9e6e-4ee1-9066-d84511448142")
            ${p.RE3.str}
        )
        (pad "RE4" thru_hole oval
            (at 7.104 -1.46)
            (size 1.6 1.6)
            (drill 0.8)
            (layers "*.Cu" "*.Mask")
            (remove_unused_layers no)
            (uuid "d7cd5113-3632-42e7-a14b-0b9434bc95f5")
            ${p.RE4.str}
       )
        (pad "VCC1" thru_hole oval
            (at -0.516 -1.46)
            (size 1.6 1.6)
            (drill 0.8)
            (layers "*.Cu" "*.Mask")
            (remove_unused_layers no)
            (uuid "35b8d0fb-172a-4c99-90f9-5ea39a647fc2")
            ${p.VCC1.str}
        )
        (pad "VCC2" thru_hole oval
            (at 2.024 -1.46)
            (size 1.6 1.6)
            (drill 0.8)
            (layers "*.Cu" "*.Mask")
            (remove_unused_layers no)
            (uuid "f5f3b676-0a4b-42d4-8daa-010a3b46671e")
            ${p.VCC2.str}
        )
    )
    `
}