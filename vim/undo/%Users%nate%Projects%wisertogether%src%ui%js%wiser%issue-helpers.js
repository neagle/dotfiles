Vim�UnDo� ��u�pv�3��cn�w��씩�����=�+�   c                  4       4   4   4    P��     _�                     Z   6    ����                                                                                                                                                                                                                                                                                                                                                             P��    �   Y   [   d      :                $('.glossary-term-link').each(function() {5�_�                    Z   7    ����                                                                                                                                                                                                                                                                                                                                                             P�     �   Y   [   d      ;                $('.glossary-term-link').each(function () {5�_�                    Z   8    ����                                                                                                                                                                                                                                                                                                                                                             P�    �   Y   [   d      ;                $('.glossary-term-link').each(function () {5�_�                    \   9    ����                                                                                                                                                                                                                                                                                                                                                             P�    �   [   ]   d      :                        window.open(this.href, 'glossary',   `                            'height=500,width=500,location=no,menubar=no,status=no,toolbar=no');5�_�                    Z   8    ����                                                                                                                                                                                                                                                                                                                                                             P�$     �   Y   [   c      @                $('.glossary-term-link').each(function (event) {5�_�                    [   ,    ����                                                                                                                                                                                                                                                                                                                                                             P�'    �   Z   \   c      /                    $(this).click(function () {5�_�                    \       ����                                                                                                                                                                                                                                                                                                                                                             P�,    �   [   ]   d                              �   [   ]   c    5�_�      	              ^       ����                                                                                                                                                                                                                                                                                                                                                             P�5    �   ]   ^          %                        return false;5�_�      
           	   [       ����                                                                                                                                                                                                                                                                                                                                                             P��    �   [   ]   d                              �   [   ]   c    5�_�   	              
   Z   5    ����                                                                                                                                                                                                                                                                                                                                                             P��     �   Y   [   e                      �   Y   [   d    5�_�   
                 5   D    ����                                                                                                                                                                                                                                                                                                                                                             P��    �   4   6   e      H                $doc.delegate( '.help_hover', 'mouseenter', function() {5�_�                    5       ����                                                                                                                                                                                                                                                                                                                                                             P��   	 �   4   6   e      I                $doc.delegate( '.help_hover', 'mouseenter', function () {5�_�                    6   "    ����                                                                                                                                                                                                                                                                                                                                                             P��     �   5   7   e      *                    var $this = $( this );5�_�                    6   &    ����                                                                                                                                                                                                                                                                                                                                                             P��     �   5   7   e      )                    var $this = $(this );5�_�                    7   *    ����                                                                                                                                                                                                                                                                                                                                                             P��     �   6   8   e      A                    if ( ! $this.hasClass( 'is-initialized' ) ) {5�_�                    7       ����                                                                                                                                                                                                                                                                                                                                                             P��     �   6   8   e      ?                    if ( ! $this.hasClass('is-initialized') ) {5�_�                    7       ����                                                                                                                                                                                                                                                                                                                                                             P��   
 �   6   8   e      =                    if (! $this.hasClass('is-initialized')) {5�_�                    <   5    ����                                                                                                                                                                                                                                                                                                                                                             P�     �   ;   =   e      G                            opts = $this.next().attr( 'data-tooltip' );5�_�                    >       ����                                                                                                                                                                                                                                                                                                                                                             P�     �   =   ?   e      %                        if ( opts ) {5�_�                    ?   #    ����                                                                                                                                                                                                                                                                                                                                                             P�
     �   >   C   b      %                            $.each();�   >   @   e      M                            $.each( opts.split(/\s*;\s*/), function(i, opt) {   A                                var parts = opt.split(/\s*:\s*/);   >                                defaults[parts[0]] = parts[1];                               });5�_�                    ?   B    ����                                                                                                                                                                                                                                                                                                                                                             P�    �   >   @   e      L                            $.each(opts.split(/\s*;\s*/), function(i, opt) {5�_�                    E       ����                                                                                                                                                                                                                                                                                                                                                             P�     �   D   F   e      /                        if ( defaults.align ) {5�_�                    G        ����                                                                                                                                                                                                                                                                                                                                                             P�     �   F   H   e      >                            if ( defaults.align === 'left' ) {5�_�                    J   %    ����                                                                                                                                                                                                                                                                                                                                                             P�    �   I   K   e      D                            else if ( defaults.align === 'right' ) {5�_�                    Q   &    ����                                                                                                                                                                                                                                                                                                                                                             P�     �   P   R   e      2                        $this.tooltip( defaults );5�_�                    R   '    ����                                                                                                                                                                                                                                                                                                                                                             P�     �   Q   S   e      ;                        $this.addClass( 'is-initialized' );5�_�                    U   &    ����                                                                                                                                                                                                                                                                                                                                                             P�     �   T   V   e      6                        $this.trigger( 'mouseenter' );5�_�                    Z       ����                                                                                                                                                                                                                                                                                                                                                             P�7     �   Y   [   e                      $doc.delegate(5�_�                    Z   "    ����                                                                                                                                                                                                                                                                                                                                                             P�C     �   Y   [   e      6                $doc.on('click', '.glossary-term-link'5�_�                    Z   7    ����                                                                                                                                                                                                                                                                                                                                                             P�F    �   Y   \   e      7                $doc.on('click', 'a.glossary-term-link'5�_�                     Z       ����                                                                                                                                                                                                                                                                                                                            \          c          V       P�R     �   Z   \   f    5�_�      !               [       ����                                                                                                                                                                                                                                                                                                                            ]          d          V       P�S    �   Z   \   g      6                        console.log('glossary click');5�_�       "           !   [       ����                                                                                                                                                                                                                                                                                                                            ]          d          V       P�X     �   [   ]   g    5�_�   !   #           "   \       ����                                                                                                                                                                                                                                                                                                                            ^          e          V       P�Z     �   [   ]   h      /                        event.preventDefault();5�_�   "   $           #   \       ����                                                                                                                                                                                                                                                                                                                            ^          e          V       P�]     �   \   ^   h    5�_�   #   %           $   ]       ����                                                                                                                                                                                                                                                                                                                            _          f          V       P�_    �   \   ^   i                              window.open(this.href, 'glossary', 'height=500,width=500,location=no,menubar=no,status=no,toolbar=no');5�_�   $   &           %   _        ����                                                                                                                                                                                                                                                                                                                            _          e          V       P�c     �   d   f                          });�   c   e                              });�   b   d                                  window.open(this.href, 'glossary', 'height=500,width=500,location=no,menubar=no,status=no,toolbar=no');�   a   c          /                        event.preventDefault();�   `   b          6                        console.log('glossary click');�   _   a          4                    $(this).click(function (event) {�   ^   `          ;                $('.glossary-term-link').each(function () {5�_�   %   '           &   ^       ����                                                                                                                                                                                                                                                                                                                            _          e          V       P�e    �   ]   _   i                      }5�_�   &   (           '   [   !    ����                                                                                                                                                                                                                                                                                                                            _          e          V       P��    �   Z   \   i      2                    console.log('glossary click');5�_�   '   )           (   ]   $    ����                                                                                                                                                                                                                                                                                                                                                             P�h    �   \   ^          {                    window.open(this.href, 'glossary', 'height=500,width=500,location=no,menubar=no,status=no,toolbar=no');5�_�   (   *           )   [   !    ����                                                                                                                                                                                                                                                                                                                                                             P�}     �   Z   \   i      <                    console.log('delegated glossary click');5�_�   )   +           *   [   !    ����                                                                                                                                                                                                                                                                                                                                                             P�}    �   Z   \   i      $                    console.log('');5�_�   *   ,           +   [       ����                                                                                                                                                                                                                                                                                                                                                             P�7    �   Z   [          8                    console.log('go nowhere my friend');5�_�   +   -           ,   \       ����                                                                                                                                                                                                                                                                                                                                                             P�@    �   [   ]          }                    //window.open(this.href, 'glossary', 'height=500,width=500,location=no,menubar=no,status=no,toolbar=no');5�_�   ,   .           -   \   %    ����                                                                                                                                                                                                                                                                                                                                                             P�G    �   [   ]   h      {                    window.open(this.href, 'glossary', 'height=500,width=500,location=no,menubar=no,status=no,toolbar=no');5�_�   -   /           .   [   )    ����                                                                                                                                                                                                                                                                                                                                                             P��    �   [   ]   i                          �   [   ]   h    5�_�   .   0           /   Z   %    ����                                                                                                                                                                                                                                                                                                                                                             P��     �   Z   \   j                          �   Z   \   i    5�_�   /   1           0   [   '    ����                                                                                                                                                                                                                                                                                                                                                             P��    �   [   ]   j    5�_�   0   2           1   _        ����                                                                                                                                                                                                                                                                                                                                                             P��     �   ^   `   k      �                    window.open(this.data-href, 'glossary', 'height=500,width=500,location=no,menubar=no,status=no,toolbar=no');5�_�   1   3           2   _        ����                                                                                                                                                                                                                                                                                                                                                             P��    �   ^   `   k      r                    window.open(, 'glossary', 'height=500,width=500,location=no,menubar=no,status=no,toolbar=no');5�_�   2   4           3   ^       ����                                                                                                                                                                                                                                                                                                                                                             P��    �   ]   ^          &                    console.log(this);5�_�   3               4   `        ����                                                                                                                                                                                                                                                                                                                            `          f          V       P��     �   _   `          =                //$('.glossary-term-link').each(function () {   6                    //$(this).click(function (event) {   8                        //console.log('glossary click');   1                        //event.preventDefault();   �                        //window.open(this.href, 'glossary', 'height=500,width=500,location=no,menubar=no,status=no,toolbar=no');                       //});                   //});5��