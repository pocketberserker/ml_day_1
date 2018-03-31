(
  (frame
    (image "black" (layer (name "base") (x 0) (y 0)))
    (image "cowlick" (layer (name "logo") (x 576) (y 296) (opacity 0)))
    (layer (name "message") (opacity 0))
    (text (clear #t) "")
    (logo (layer "logo") (duration 1000) (wait 3000))
  )
  (frame
    (image "entry" (layer (name "base") (x 0) (y 0)))
    (layer (name "message") (opacity 100))
    (text (clear #t) "「ここは……？」")
  )
  (frame
;    (text (clear #t) #"「~|(ruby (rb "戦士") (rt "社畜"))|達の~|(ruby (rb "戦場") (rt "閉鎖空間")|よ」")
    (text (clear #t) #"「~|(ruby (rb "戦士") (rt "社畜"))|達の戦場よ」
※違います")
  )
  (frame
    (jump (scene slide))
  )
)
