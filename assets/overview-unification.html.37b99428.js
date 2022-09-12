import{_ as c,o as h,c as d,b as e,e as i,F as $,G as s,A as l,f as n}from"./app.a0d4b9da.js";import{_ as o}from"./unit-split-complex.855a24ca.js";var r="/images/reference/unit-complex.png",p="/images/reference/unit-dual.png";const v={},b=s('<h1 id="number-systems" tabindex="-1"><a class="header-anchor" href="#number-systems" aria-hidden="true">#</a> Number Systems</h1><span class="hidden"> $$ \\newcommand{\\placeholder}{\\ast} \\newcommand{\\N}{n} \\newcommand{\\K}{k} \\newcommand{\\H}[1]{h_{#1}} \\newcommand{\\cosk}[1]{\\operatorname{\\mathfrak{c}_{#1}}} \\newcommand{\\sink}[1]{\\operatorname{\\mathfrak{s}_{#1}}} \\newcommand{\\tank}[1]{\\operatorname{\\mathfrak{t}_{#1}}} $$ </span><p>This page documents a few interesting number systems.</p><h2 id="preliminaries" tabindex="-1"><a class="header-anchor" href="#preliminaries" aria-hidden="true">#</a> Preliminaries</h2><p>The unified treatments below make use of <a href="/reference/trigonometry/general-functions">generalized trigonometric functions</a>.</p><h2 id="complex-number-family" tabindex="-1"><a class="header-anchor" href="#complex-number-family" aria-hidden="true">#</a> Complex Number Family</h2><p>Initially, we consider a few select members of the complex number family. In the process, we highlight parellels between them. Subsequently, we provide a unified perspective.</p><h3 id="individual-members" tabindex="-1"><a class="header-anchor" href="#individual-members" aria-hidden="true">#</a> Individual Members</h3><p>Let us consider the complex numbers, and two of their close relatives. Each corresponding to one choice from $\\{-1, 0, +1\\}$.</p><div class="grid grid-flow-row grid-cols-none lg:grid-flow-col lg:grid-rows-[repeat(15,_auto)] gap-x-px bg-border-dark"><div class="bg-bg p-2"><h4 class="my-1">Complex Numbers</h4></div><div class="bg-bg-light text-center"><h5 class="my-2 h-6"><span class="lg:hidden">Cartesian Forms</span></h5></div><div class="bg-bg p-2"><p class="my-1"> Numbers of the form: $$z = a + ib$$ where: <ul><li>$i^{2}= -1$</li></ul> Resulting in multiplication table: <div class="flex justify-center my-4"><div class="cells--sm flex flex-col"><div class="flex flex-row"><div class="cell"></div><div class="cell cell--head">$\\mathbf{1}$</div><div class="cell cell--head">$\\mathbf{i}$</div></div><div class="flex flex-row"><div class="cell cell--head">$\\mathbf{1}$</div><div class="cell cell--body">$1$</div><div class="cell cell--body">$i$</div></div><div class="flex flex-row"><div class="cell cell--head">$\\mathbf{i}$</div><div class="cell cell--body">$i$</div><div class="cell cell--body">$-1$</div></div></div></div></p></div><div class="bg-bg-light text-center"><h5 class="my-2 h-6"><span class="lg:hidden">Operations</span></h5></div><div class="bg-bg p-2"><p class="my-1"> Given $z = a + ib$ we have: </p><p><h6 class="my-1">Addition</h6> $$\\small \\begin{split}z_0 + z_1 = (a_0 + i b_0) + (a_1 + i b_1) \\\\= (a_0 + a_1) + i(b_0 + b_1)\\end{split}$$ <h6 class="my-1">Additive Inverse</h6> $$-z = -a - ib$$ <h6 class="my-1">Multiplication</h6> $$\\small \\begin{split}z_0 z_1 = (a_0 + i b_0) (a_1 + i b_1) \\\\= (a_0 a_1 - b_0 b_1) + i(a_0 b_1 + b_0 a_1)\\end{split}$$ <h6 class="my-1">Conjugate</h6> $$\\overline{z} = a - ib$$ <h6 class="my-1">Quadratic Form</h6> $$|z|^2 = z\\overline{z} = a^2 + b^2$$ <h6 class="my-1">Multiplicative Inverse</h6> $$z^{-1} = \\frac{\\overline{z}}{z\\overline{z}} = \\frac{\\overline{z}}{|z|^2}$$ </p></div><div class="bg-bg-light text-center"><h5 class="my-2 h-6"><span class="lg:hidden">Polar/Exponential Forms</span></h5></div><div class="bg-bg p-2"><p class="my-1"> Substituting $i\\theta$ for $x$ in $e^{x}$: $$e^{i\\theta} = \\cos(\\theta) + i\\sin(\\theta)$$ which motivates: $$z = r(\\cos(\\theta) + i\\sin(\\theta)) = re^{i\\theta}$$ </p></div><div class="bg-bg-light text-center"><h5 class="my-2 h-6"><span class="lg:hidden">Operations</span></h5></div><div class="bg-bg p-2"><p class="my-1"> Given $z = r e^{i \\theta}$ we have: </p><p><h6 class="my-1">Multiplication</h6> $$\\small z_0 z_1 = (r_0 e^{i \\theta_0}) (r_1 e^{i \\theta_1}) = (r_0 r_1) e^{i (\\theta_0+ \\theta_1)}$$ <h6 class="my-1">Conjugate</h6> $$\\overline{z} = r e^{i (-\\theta)}$$ <h6 class="my-1">Quadratic Form</h6> $$|z|^2 = z\\overline{z} = r^2$$ <h6 class="my-1">Multiplicative Inverse</h6> $$z^{-1} = \\frac{\\overline{z}}{|z|^2} = \\frac{1}{r} e^{i(-\\theta)}$$ </p></div><div class="bg-bg-light text-center"><h5 class="my-2 h-6"><span class="lg:hidden">Conversions</span></h5></div><div class="bg-bg p-2"><p class="my-1"> Given $z = re^{i\\theta}$ we obtain: $$ \\begin{align*} a &amp;= r\\cos(\\theta)\\\\\\\\ b &amp;= r\\sin(\\theta) \\end{align*} $$ </p><p> Given $z = a + ib$ we obtain: $$ \\begin{align*} r &amp;= \\sqrt{a^2 + b^2}\\\\\\\\ \\theta &amp;= \\operatorname{atan2}(b,a) \\end{align*} $$ </p></div><div class="bg-bg-light text-center"><h5 class="my-2 h-6"><span class="lg:hidden">Operations</span></h5></div><div class="bg-bg p-2"><h6 class="my-1">Exponential</h6><p> Using $e^{x+y} = e^{x} e^{y}$:  $$ e^{z} = e^{a + ib} = e^{a} e^{ib} $$ </p><h6 class="my-1">Logarithm</h6><p> Using $\\ln(x y) = \\ln(x) + \\ln(y)$: $$ \\ln(z) = \\ln(re^{i\\theta}) = \\ln(r) + i\\theta $$ </p><h6 class="my-1">Exponentiation</h6><p> $$ z_0^{z_1} = e^{\\ln(z_0) z_1} $$ </p></div><div class="bg-bg-light text-center"><h5 class="my-2 h-6"><span class="lg:hidden">Plots</span></h5></div><div class="bg-bg p-2"><p class="my-1"> All $z = a + ib$ with: <ul><li> $|z|^2 = -1$ ($\\varnothing$)</li><li> $|z|^2 = \\phantom{+}0$ (orange)</li><li> $|z|^2 = +1$ (blue)</li></ul></p><p class="text-center"><img src="'+r+'"></p></div><div class="bg-bg p-2"><h4 class="my-1">Dual Numbers</h4></div><div class="bg-bg-light text-center"><h5 class="my-2 h-6">Cartesian Forms</h5></div><div class="bg-bg p-2"><p class="my-1"> Numbers of the form: $$z = a + \\epsilon b$$ where: <ul><li>$\\epsilon^{2}= 0$</li></ul> Resulting in multiplication table: <div class="flex justify-center my-4"><div class="cells--sm flex flex-col"><div class="flex flex-row"><div class="cell"></div><div class="cell cell--head">$\\mathbf{1}$</div><div class="cell cell--head">$\\mathbf{\\epsilon}$</div></div><div class="flex flex-row"><div class="cell cell--head">$\\mathbf{1}$</div><div class="cell cell--body">$1$</div><div class="cell cell--body">$\\epsilon$</div></div><div class="flex flex-row"><div class="cell cell--head">$\\mathbf{\\epsilon}$</div><div class="cell cell--body">$\\epsilon$</div><div class="cell cell--body">$0$</div></div></div></div></p></div><div class="bg-bg-light text-center"><h5 class="my-2 h-6">Operations</h5></div><div class="bg-bg p-2"><p class="my-1"> Given $z = a + \\epsilon b$ we have: </p><p><h6 class="my-1">Addition</h6> $$\\small \\begin{split}z_0 + z_1 = (a_0 + \\epsilon b_0) + (a_1 + \\epsilon b_1) \\\\= (a_0 + a_1) + \\epsilon (b_0 + b_1)\\end{split}$$ <h6 class="my-1">Additive Inverse</h6> $$-z = -a - \\epsilon b$$ <h6 class="my-1">Multiplication</h6> $$\\small \\begin{split}z_0 z_1 = (a_0 + \\epsilon b_0) (a_1 + \\epsilon b_1) \\\\= (a_0 a_1) + \\epsilon (a_0 b_1 + b_0 a_1)\\end{split}$$ <h6 class="my-1">Conjugate</h6> $$\\overline{z} = a - \\epsilon b$$ <h6 class="my-1">Quadratic Form</h6> $$|z|^2 = z\\overline{z} = a^2$$ <h6 class="my-1">Multiplicative Inverse</h6> $$z^{-1} = \\frac{\\overline{z}}{z\\overline{z}} = \\frac{\\overline{z}}{|z|^2}$$ </p></div><div class="bg-bg-light text-center"><h5 class="my-2 h-6">Polar/Exponential Forms</h5></div><div class="bg-bg p-2"><p class="my-1"> Substituting $\\epsilon\\theta$ for $x$ in $e^{x}$: $$e^{\\epsilon\\theta} = 1 + \\epsilon\\theta$$ which motivates: $$z = r(1 + \\epsilon\\theta) = re^{\\epsilon\\theta}$$ </p></div><div class="bg-bg-light text-center"><h5 class="my-2 h-6">Operations</h5></div><div class="bg-bg p-2"><p class="my-1"> Given $z = r e^{\\epsilon \\theta}$ we have: </p><p><h6 class="my-1">Multiplication</h6> $$\\small z_0 z_1 = (r_0 e^{\\epsilon \\theta_0}) (r_1 e^{\\epsilon \\theta_1}) = (r_0 r_1) e^{\\epsilon (\\theta_0 + \\theta_1)}$$ <h6 class="my-1">Conjugate</h6> $$\\overline{z} = r e^{\\epsilon (-\\theta)}$$ <h6 class="my-1">Quadratic Form</h6> $$|z|^2 = z\\overline{z} = r^2$$ <h6 class="my-1">Multiplicative Inverse</h6> $$z^{-1} = \\frac{\\overline{z}}{|z|^2} = \\frac{1}{r} e^{\\epsilon (-\\theta)}$$ </p></div><div class="bg-bg-light text-center"><h5 class="my-2 h-6">Conversions</h5></div><div class="bg-bg p-2"><p class="my-1"> Given $z = re^{\\epsilon \\theta}$ we obtain: $$ \\begin{align*} a &amp;= r\\\\\\\\ b &amp;= r\\theta \\end{align*} $$ </p><p> Given $z = a + \\epsilon b$ we obtain: $$ \\begin{align*} r &amp;= \\sqrt{a^2}\\\\\\\\ \\theta &amp;= \\frac{b}{a} \\end{align*} $$ </p></div><div class="bg-bg-light text-center"><h5 class="my-2 h-6">Operations</h5></div><div class="bg-bg p-2"><h6 class="my-1">Exponential</h6><p> Using $e^{x+y} = e^{x} e^{y}$:  $$ e^{z} = e^{a + \\epsilon b} = e^{a} e^{\\epsilon b} $$ </p><h6 class="my-1">Logarithm</h6><p> Using $\\ln(x y) = \\ln(x) + \\ln(y)$: $$ \\ln(z) = \\ln(re^{\\epsilon\\theta}) = \\ln(r) + \\epsilon\\theta $$ </p><h6 class="my-1">Exponentiation</h6><p> $$ z_0^{z_1} = e^{\\ln(z_0) z_1} $$ </p></div><div class="bg-bg-light text-center"><h5 class="my-2 h-6">Plots</h5></div><div class="bg-bg p-2"><p class="my-1"> All $z = a + \\epsilon b$ with: <ul><li> $|z|^2 = -1$ ($\\varnothing$)</li><li> $|z|^2 = \\phantom{+}0$ (orange)</li><li> $|z|^2 = +1$ (blue)</li></ul></p><p class="text-center"><img src="'+p+'"></p></div><div class="bg-bg p-2"><h4 class="my-1">Split-Complex Numbers</h4></div><div class="bg-bg-light text-center"><h5 class="my-2 h-6"><span class="lg:hidden">Cartesian Forms</span></h5></div><div class="bg-bg p-2"><p class="my-1">Numbers of the form: $$z = a + jb$$ where: <ul><li>$j^{2}= +1$</li></ul> Resulting in multiplication table: <div class="flex justify-center my-4"><div class="cells--sm flex flex-col"><div class="flex flex-row"><div class="cell"></div><div class="cell cell--head">$\\mathbf{1}$</div><div class="cell cell--head">$\\mathbf{j}$</div></div><div class="flex flex-row"><div class="cell cell--head">$\\mathbf{1}$</div><div class="cell cell--body">$1$</div><div class="cell cell--body">$j$</div></div><div class="flex flex-row"><div class="cell cell--head">$\\mathbf{j}$</div><div class="cell cell--body">$j$</div><div class="cell cell--body">$+1$</div></div></div></div></p></div><div class="bg-bg-light text-center"><h5 class="my-2 h-6"><span class="lg:hidden">Operations</span></h5></div><div class="bg-bg p-2"><p class="my-1"> Given $z = a + jb$ we have: </p><p><h6 class="my-1">Addition</h6> $$\\small \\begin{split}z_0 + z_1 = (a_0 + j b_0) + (a_1 + j b_1) \\\\= (a_0 + a_1) + j(b_0 + b_1)\\end{split}$$ <h6 class="my-1">Additive Inverse</h6> $$-z = -a - jb$$ <h6 class="my-1">Multiplication</h6> $$\\small \\begin{split}z_0 z_1 = (a_0 + j b_0) (a_1 + j b_1) \\\\= (a_0 a_1 + b_0 b_1) + j(a_0 b_1 + b_0 a_1)\\end{split}$$ <h6 class="my-1">Conjugate</h6> $$\\overline{z} = a - jb$$ <h6 class="my-1">Quadratic Form</h6> $$|z|^2 = z\\overline{z} = a^2 - b^2$$ <h6 class="my-1">Multiplicative Inverse</h6> $$z^{-1} = \\frac{\\overline{z}}{z\\overline{z}} = \\frac{\\overline{z}}{|z|^2}$$ </p></div><div class="bg-bg-light text-center"><h5 class="my-2 h-6"><span class="lg:hidden">Polar/Exponential Forms</span></h5></div><div class="bg-bg p-2"><p class="my-1"> Substituting $j\\theta$ for $x$ in $e^{x}$: $$e^{j\\theta} = \\cosh(\\theta) + j\\sinh(\\theta)$$ which motivates: $$z = r(\\cosh(\\theta) + j\\sinh(\\theta)) = re^{j\\theta}$$ </p></div><div class="bg-bg-light text-center"><h5 class="my-2 h-6"><span class="lg:hidden">Operations</span></h5></div><div class="bg-bg p-2"><p class="my-1"> Given $z = r e^{j \\theta}$ we have: </p><p><h6 class="my-1">Multiplication</h6> $$\\small z_0 z_1 = (r_0 e^{j \\theta_0}) (r_1 e^{j \\theta_1}) = (r_0 r_1) e^{j (\\theta_0 + \\theta_1)}$$ <h6 class="my-1">Conjugate</h6> $$\\overline{z} = r e^{j (-\\theta)}$$ <h6 class="my-1">Quadratic Form</h6> $$|z|^2 = z\\overline{z} = r^2$$ <h6 class="my-1">Multiplicative Inverse</h6> $$z^{-1} = \\frac{\\overline{z}}{|z|^2} = \\frac{1}{r} e^{j (-\\theta)}$$ </p></div><div class="bg-bg-light text-center"><h5 class="my-2 h-6"><span class="lg:hidden">Conversions</span></h5></div><div class="bg-bg p-2"><p class="my-1"> Given $z = re^{j\\theta}$ we obtain: $$ \\begin{align*} a &amp;= r\\cosh(\\theta)\\\\\\\\ b &amp;= r\\sinh(\\theta) \\end{align*} $$ </p><p> Given $z = a + jb$ we obtain: $$ \\begin{align*} r &amp;= \\sqrt{a^2 - b^2}\\\\\\\\ \\theta &amp;= \\tanh^{-1}(\\frac{b}{a}) \\end{align*} $$ </p></div><div class="bg-bg-light text-center"><h5 class="my-2 h-6"><span class="lg:hidden">Operations</span></h5></div><div class="bg-bg p-2"><h6 class="my-1">Exponential</h6><p> Using $e^{x+y} = e^{x} e^{y}$:  $$ e^{z} = e^{a + jb} = e^{a} e^{jb} $$ </p><h6 class="my-1">Logarithm</h6><p> Using $\\ln(x y) = \\ln(x) + \\ln(y)$: $$ \\ln(z) = \\ln(re^{j\\theta}) = \\ln(r) + j\\theta $$ </p><h6 class="my-1">Exponentiation</h6><p> $$ z_0^{z_1} = e^{\\ln(z_0) z_1} $$ </p></div><div class="bg-bg-light text-center"><h5 class="my-2 h-6"><span class="lg:hidden">Plots</span></h5></div><div class="bg-bg p-2"><p class="my-1"> All $z = a + jb$ with: <ul><li> $|z|^2 = -1$ (green)</li><li> $|z|^2 = \\phantom{+}0$ (orange)</li><li> $|z|^2 = +1$ (blue)</li></ul></p><p class="text-center"><img src="'+o+'"></p></div></div><h3 id="unified-family" tabindex="-1"><a class="header-anchor" href="#unified-family" aria-hidden="true">#</a> Unified Family </h3><span class="hidden"> $\\newcommand{\\K}{k}$ </span><p>The similarities in the number systems above suggest a possible unification as follows.</p><div class="grid grid-flow-row grid-cols-none lg:grid-flow-col lg:grid-rows-[repeat(13,_auto)] gap-x-px"><div class="bg-bg p-2 lg:row-span-full"></div><div class="bg-bg p-2"><h4 class="my-1">Unified Complex Numbers</h4></div><div class="bg-bg-light text-center"><h5 class="my-2 h-6">Cartesian Forms</h5></div><div class="bg-bg p-2"><p class="my-1"> Numbers of the form: $$z = a + \\kappa b$$ where: <ul><li>$\\kappa^{2}= -\\K$</li></ul> Resulting in multiplication table: <div class="flex justify-center my-4"><div class="cells--sm flex flex-col"><div class="flex flex-row"><div class="cell"></div><div class="cell cell--head">$\\mathbf{1}$</div><div class="cell cell--head">$\\mathbf{\\kappa}$</div></div><div class="flex flex-row"><div class="cell cell--head">$\\mathbf{1}$</div><div class="cell cell--body">$1$</div><div class="cell cell--body">$\\kappa$</div></div><div class="flex flex-row"><div class="cell cell--head">$\\mathbf{\\kappa}$</div><div class="cell cell--body">$\\kappa$</div><div class="cell cell--body">$-\\K$</div></div></div></div></p></div><div class="bg-bg-light text-center"><h5 class="my-2 h-6">Operations</h5></div><div class="bg-bg p-2"><p class="my-1"> Given $z_{\\placeholder} = a_{\\placeholder} + \\kappa b_{\\placeholder}$ we have: </p><p><h6 class="my-1">Addition</h6> $$\\small \\begin{split}z_0 + z_1 = (a_0 + \\kappa b_0) + (a_1 + \\kappa b_1) \\\\= (a_0 + a_1) + \\kappa (b_0 + b_1)\\end{split}$$ <h6 class="my-1">Additive Inverse</h6> $$-z = -a - \\kappa b$$ <h6 class="my-1">Multiplication</h6> $$\\small \\begin{split}z_0 z_1 = (a_0 + \\kappa b_0) (a_1 + \\kappa b_1) \\\\= (a_0 a_1 - \\K b_0 b_1) + \\kappa (a_0 b_1 + b_0 a_1)\\end{split}$$ <h6 class="my-1">Conjugate</h6> $$\\overline{z} = a - \\kappa b$$ <h6 class="my-1">Quadratic Form</h6> $$|z|^2 = z\\overline{z} = a^2 + \\K b^2$$ <h6 class="my-1">Multiplicative Inverse</h6> $$z^{-1} = \\frac{\\overline{z}}{z\\overline{z}} = \\frac{\\overline{z}}{|z|^2}$$ </p></div><div class="bg-bg-light text-center"><h5 class="my-2 h-6">Polar/Exponential Forms</h5></div><div class="bg-bg p-2"><p class="my-1"> Substituting $\\kappa\\theta$ for $x$ in $e^{x}$: $$e^{\\kappa\\theta} = \\mathfrak{c}_{\\K}(\\theta) + \\kappa\\mathfrak{s}_{\\K}(\\theta)$$ which motivates: $$z = r(\\mathfrak{c}_{\\K}(\\theta) + \\kappa\\mathfrak{s}_{\\K}(\\theta)) = re^{\\kappa\\theta}$$ </p></div><div class="bg-bg-light text-center"><h5 class="my-2 h-6">Operations</h5></div><div class="bg-bg p-2"><p class="my-1"> Given $z_{\\placeholder} = r_{\\placeholder} e^{\\kappa \\theta_{\\placeholder}}$ we have: </p><p><h6 class="my-1">Multiplication</h6> $$z_0 z_1 = (r_0 e^{\\kappa \\theta_0}) (r_1 e^{\\kappa \\theta_1}) = (r_0 r_1) e^{\\kappa (\\theta_0 + \\theta_1)}$$ <h6 class="my-1">Conjugate</h6> $$\\overline{z} = r e^{\\kappa (-\\theta)}$$ <h6 class="my-1">Quadratic Form</h6> $$|z|^2 = z\\overline{z} = r^2$$ <h6 class="my-1">Multiplicative Inverse</h6> $$z^{-1} = \\frac{\\overline{z}}{|z|^2} = \\frac{1}{r} e^{\\kappa (-\\theta)}$$ </p></div><div class="bg-bg-light text-center"><h5 class="my-2 h-6">Conversions</h5></div><div class="bg-bg p-2"><p class="my-1"> Given $z = re^{\\kappa\\theta}$ we obtain: $$ \\begin{align*} a &amp;= r\\mathfrak{c}_{\\K}(\\theta)\\\\\\\\ b &amp;= r\\mathfrak{s}_{\\K}(\\theta) \\end{align*} $$ </p><p> Given $z = a + \\kappa b$ we obtain: $$ \\begin{align*} r &amp;= \\sqrt{a^2 + \\K b^2}\\\\\\\\ \\theta &amp;= \\mathfrak{t}_{\\K}^{-1}(\\frac{b}{a}) \\end{align*} $$ </p></div><div class="bg-bg-light text-center"><h5 class="my-2 h-6">Operations</h5></div><div class="bg-bg p-2"><h6 class="my-1">Exponential</h6><p> Using $e^{x+y} = e^{x} e^{y}$: $$ e^{z} = e^{a + \\kappa b} = e^{a} e^{\\kappa b} $$ </p><h6 class="my-1">Logarithm</h6><p> Using $\\ln(x y) = \\ln(x) + \\ln(y)$: $$ \\ln(z) = \\ln(re^{\\kappa\\theta}) = \\ln(r) + \\kappa\\theta $$ </p><h6 class="my-1">Exponentiation</h6><p> $$ z_0^{z_1} = e^{\\ln(z_0) z_1} $$ </p></div><div class="bg-bg p-2 lg:row-span-full"></div></div><h2 id="quaternion-family" tabindex="-1"><a class="header-anchor" href="#quaternion-family" aria-hidden="true">#</a> Quaternion Family</h2><p>Initially, we consider a few select members of the quaternion family. In the process, we highlight parellels between them. Subsequently, we provide a unified perspective.</p><h3 id="individual-members-1" tabindex="-1"><a class="header-anchor" href="#individual-members-1" aria-hidden="true">#</a> Individual Members</h3><p>Let us consider the quaternions, and eight of their close relatives. Each corresponding to two choices from $\\{-1, 0, +1\\}$.</p>',18),m={class:"grid grid-flow-row grid-cols-none lg:grid-flow-col lg:grid-rows-[repeat(3,_auto)] gap-x-px bg-border-dark"},g=s('<div class="bg-bg p-2"><h4 class="my-1">Quaternions</h4></div><div class="bg-bg-light text-center"><h5 class="my-2 h-6"><span class="lg:hidden">Cartesian Forms</span></h5></div>',2),_={class:"bg-bg p-2"},u={class:"my-1"},y=l(" Numbers of the form: $$z = a + ib + jc + kd$$ where: "),f=e("ul",null,[e("li",null,"$i^{2} = -1$"),e("li",null,"$j^{2} = -1$"),e("li",null,"$ij = k = -ji$")],-1),z=l(" Resulting in multiplication table: "),x=e("div",{class:"bg-bg p-2"},[e("h4",{class:"my-1"},"Semi-Quaternions")],-1),k=e("div",{class:"bg-bg-light text-center"},[e("h5",{class:"my-2 h-6"},"Cartesian Forms")],-1),j={class:"bg-bg p-2"},w={class:"my-1"},F=l(" Numbers of the form: $$z = a + ib + jc + kd$$ where: "),N=e("ul",null,[e("li",null,"$i^{2} = -1$"),e("li",null,"$j^{2} = 0$"),e("li",null,"$ij = k = -ji$")],-1),C=l(" Resulting in multiplication table: "),I=s('<div class="bg-bg p-2"><h4 class="my-1">Split-Quaternions</h4></div><div class="bg-bg-light text-center"><h5 class="my-2 h-6"><span class="lg:hidden">Cartesian Forms</span></h5></div>',2),M={class:"bg-bg p-2"},Q={class:"my-1"},G=l(" Numbers of the form: $$z = a + ib + jc + kd$$ where: "),E=e("ul",null,[e("li",null,"$i^{2} = -1$"),e("li",null,"$j^{2} = +1$"),e("li",null,"$ij = k = -ji$")],-1),S=l(" Resulting in multiplication table: "),R=e("p",null,"\xA0",-1),A={class:"grid grid-flow-row grid-cols-none lg:grid-flow-col lg:grid-rows-[repeat(3,_auto)] gap-x-px bg-border-dark"},O=s('<div class="bg-bg p-2"><h4 class="my-1">Semi-Quaternions</h4></div><div class="bg-bg-light text-center"><h5 class="my-2 h-6"><span class="lg:hidden">Cartesian Forms</span></h5></div>',2),U={class:"bg-bg p-2"},K={class:"my-1"},q=l(" Numbers of the form: $$z = a + ib + jc + kd$$ where: "),P=e("ul",null,[e("li",null,"$i^{2}= 0$"),e("li",null,"$j^{2}= -1$"),e("li",null," $ij = k = -ji$")],-1),L=l(" Resulting in multiplication table: "),H=e("div",{class:"bg-bg p-2"},[e("h4",{class:"my-1"},"Quarter-Quaternions")],-1),T=e("div",{class:"bg-bg-light text-center"},[e("h5",{class:"my-2 h-6"},"Cartesian Forms")],-1),V={class:"bg-bg p-2"},B={class:"my-1"},D=l(" Numbers of the form: $$z = a + ib + jc + kd$$ where: "),W=e("ul",null,[e("li",null,"$i^{2}= 0$"),e("li",null,"$j^{2}= 0$"),e("li",null," $ij = k = -ji$")],-1),Y=l(" Resulting in multiplication table: "),J=s('<div class="bg-bg p-2"><h4 class="my-1">Split-Semi-Quaternions</h4></div><div class="bg-bg-light text-center"><h5 class="my-2 h-6"><span class="lg:hidden">Cartesian Forms</span></h5></div>',2),X={class:"bg-bg p-2"},Z={class:"my-1"},ee=l("Numbers of the form: $$z = a + ib + jc + kd$$ where: "),le=e("ul",null,[e("li",null,"$i^{2}= 0$"),e("li",null,"$j^{2}= +1$"),e("li",null," $ij = k = -ji$")],-1),ie=l(" Resulting in multiplication table: "),ae=e("p",null,"\xA0",-1),se={class:"grid grid-flow-row grid-cols-none lg:grid-flow-col lg:grid-rows-[repeat(3,_auto)] gap-x-px bg-border-dark"},te=s('<div class="bg-bg p-2"><h4 class="my-1">Split-Quaternions</h4></div><div class="bg-bg-light text-center"><h5 class="my-2 h-6"><span class="lg:hidden">Cartesian Forms</span></h5></div>',2),ne={class:"bg-bg p-2"},ce={class:"my-1"},he=l(" Numbers of the form: $$z = a + ib + jc + kd$$ where: "),de=e("ul",null,[e("li",null,"$i^{2}= +1$"),e("li",null,"$j^{2}= -1$"),e("li",null," $ij = k = -ji$")],-1),$e=l(" Resulting in multiplication table: "),oe=e("div",{class:"bg-bg p-2"},[e("h4",{class:"my-1"},"Split-Semi-Quaternions")],-1),re=e("div",{class:"bg-bg-light text-center"},[e("h5",{class:"my-2 h-6"},"Cartesian Forms")],-1),pe={class:"bg-bg p-2"},ve={class:"my-1"},be=l(" Numbers of the form: $$z = a + ib + jc + kd$$ where: "),me=e("ul",null,[e("li",null,"$i^{2}= +1$"),e("li",null,"$j^{2}= 0$"),e("li",null," $ij = k = -ji$")],-1),ge=l(" Resulting in multiplication table: "),_e=s('<div class="bg-bg p-2"><h4 class="my-1">Split-Quaternions</h4></div><div class="bg-bg-light text-center"><h5 class="my-2 h-6"><span class="lg:hidden">Cartesian Forms</span></h5></div>',2),ue={class:"bg-bg p-2"},ye={class:"my-1"},fe=l("Numbers of the form: $$z = a + ib + jc + kd$$ where: "),ze=e("ul",null,[e("li",null,"$i^{2}= +1$"),e("li",null,"$j^{2}= +1$"),e("li",null," $ij = k = -ji$")],-1),xe=l(" Resulting in multiplication table: "),ke=s('<p>Thankfully, upon closer inspection, we discover that some of these family members are essentially the same except in disguise (i.e. they are isomorphic/equivalent up to a renaming of $i, j, k$).</p><p>In the interest of brevity, we proceed directly with the unified family, which covers all the possible cases.</p><h3 id="unified-family-1" tabindex="-1"><a class="header-anchor" href="#unified-family-1" aria-hidden="true">#</a> Unified Family </h3><p>As with the complex number family, we can also unify quaternion family.</p><div class="grid grid-flow-row grid-cols-none lg:grid-flow-col lg:grid-rows-[repeat(15,_auto)] gap-x-px"><div class="bg-bg p-2 lg:row-span-full"></div><div class="bg-bg p-2"><h4 class="my-1">Unified Quaternions</h4></div><div class="bg-bg-light text-center"><h5 class="my-2">Cartesian Form</h5></div><div class="bg-bg p-2"><p class="my-1"> Numbers of the form: $$z = a + ib + jc + kd$$ where: <ul><li>$i^{2}= -h_0$</li><li>$j^{2}= -h_1$</li><li> $ij = k = -ji$</li></ul> Resulting in multiplication table: <div class="flex justify-center my-4"><div class="cells--lg flex flex-col"><div class="flex flex-row"><div class="cell"></div><div class="cell cell--head">$\\mathbf{1}$</div><div class="cell cell--head">$\\mathbf{i}$</div><div class="cell cell--head">$\\mathbf{j}$</div><div class="cell cell--head">$\\mathbf{k}$</div></div><div class="flex flex-row"><div class="cell cell--head">$\\mathbf{1}$</div><div class="cell cell--body">$1$</div><div class="cell cell--body">$i$</div><div class="cell cell--body">$j$</div><div class="cell cell--body">$k$</div></div><div class="flex flex-row"><div class="cell cell--head">$\\mathbf{i}$</div><div class="cell cell--body">$i$</div><div class="cell cell--body">$-h_0$</div><div class="cell cell--body">$+k$</div><div class="cell cell--body">$-h_0 j$</div></div><div class="flex flex-row"><div class="cell cell--head">$\\mathbf{j}$</div><div class="cell cell--body">$j$</div><div class="cell cell--body">$-k$</div><div class="cell cell--body">$-h_1$</div><div class="cell cell--body">$+h_1 i$</div></div><div class="flex flex-row"><div class="cell cell--head">$\\mathbf{k}$</div><div class="cell cell--body">$k$</div><div class="cell cell--body">$+h_0 j$</div><div class="cell cell--body">$-h_1 i$</div><div class="cell cell--body">$-h_0 h_1$</div></div></div></div></p></div><div class="bg-bg-light text-center"><h4 class="my-2">Operations</h4></div><div class="bg-bg p-2"><p class="my-1"> Given $z_{\\placeholder} = a_{\\placeholder} + ib_{\\placeholder} + jc_{\\placeholder} + kd_{\\placeholder}$ we have: </p><p><h6 class="my-1">Addition</h6> $$\\small \\begin{split}z_0 + z_1 = (a_0 + i b_0 + j c_0 + k d_0) + (a_1 + i b_1 + j c_1 + k d_1) \\\\= (a_0 + a_1) + i(b_0 + b_1) + j(c_0 + c_1) + k(d_0 + d_1)\\end{split}$$ <h6 class="my-1">Additive Inverse</h6> $$-z = -a - ib - jc - kd$$ <h6 class="my-1">Multiplication</h6> $$\\small \\begin{alignat}{2} z_0 z_1 &amp;=\\; &amp;&amp;(a_0 + i b_0 + j c_0 + k d_0) (a_1 + i b_1 + j c_1 + k d_1) \\\\\\\\ &amp;= &amp;&amp;\\phantom{+ 1} (a_0 a_1 - h_0 b_0 b_1 - h_1 c_0 c_1 - h_0 h_1 d_0 d_1) \\\\\\\\ &amp; &amp;&amp;+ i (a_0 b_1 + a_1 b_0 + h_1 c_0 d_1 - h_1 c_1 d_0) \\\\\\\\ &amp; &amp;&amp;+ j (a_0 c_1 + a_1 c_0 - h_0 b_0 d_1 + h_0 b_1 d_0) \\\\\\\\ &amp; &amp;&amp;+ k (a_0 d_1 + a_1 d_0 + b_0 c_1 - b_1 c_0) \\end{alignat} $$ <h6 class="my-1">Conjugate</h6> $$\\overline{z} = a - ib - jc - kd$$ <h6 class="my-1">Quadratic Form</h6> $$|z|^2 = z\\overline{z} = a^2 + h_0 b^2 + h_1 c^2 + h_0 h_1 d^2$$ <h6 class="my-1">Multiplicative Inverse</h6> $$z^{-1} = \\frac{\\overline{z}}{z\\overline{z}} = \\frac{\\overline{z}}{|z|^2}$$ </p></div><div class="bg-bg-light text-center"><h4 class="my-2">Real/Imaginary Parts</h4></div><div class="bg-bg p-2"><p class="my-1"> Alternatively, $z = a + ib + jc + kd$ can be rewritten as: $$ z = a + (ib&#39; + jc&#39; + kd&#39;)e = a + \\hat{n} e $$ where $b&#39; = \\frac{b}{e},\\; c&#39; = \\frac{c}{e},\\; d&#39; = \\frac{d}{e}$. </p><p> With real part $a$ and imaginary part $\\hat{n} e$. $$ \\hat{n}^2 = -|\\hat{n}|^2 = -\\H0 {b&#39;}^2 -\\H1 {c&#39;}^2 -\\H0\\H1 {d&#39;}^2 $$ </p><p> Note that two different $z_0, z_1$ need not share the same $\\hat{n}$. </p></div><div class="bg-bg-light text-center"><h5 class="my-2 h-6">Polar/Exponential Forms</h5></div><div class="bg-bg p-2"><p class="my-1"> Substituting $\\hat{n} \\theta$ for $x$ in $e^{x}$: $$e^{\\hat{n}\\theta} = \\cosk{\\N}(\\theta) + \\hat{n}\\sink{\\N}(\\theta)$$ where $\\N = |\\hat{n}|^2$ and $\\hat{n}$ is imaginary: $$\\hat{n} = i b&#39; + j c&#39; + k d&#39;$$ which motivates: $$z = r(\\cosk{\\N}(\\theta) + \\hat{n}\\sink{\\N}(\\theta)) = re^{\\hat{n}\\theta}$$ </p></div><div class="bg-bg-light text-center"><h5 class="my-2 h-6">Operations</h5></div><div class="bg-bg p-2"><p class="my-1"> Given $z_{\\placeholder} = r_{\\placeholder} e^{\\hat{n} \\theta_{\\placeholder}}$ we have: </p><p><h6 class="my-1">Multiplication</h6> $$z_0 z_1 = (r_0 e^{\\hat{n} \\theta_0}) (r_1 e^{\\hat{n} \\theta_1}) = (r_0 r_1) e^{\\hat{n} (\\theta_0 + \\theta_1)}$$ <h6 class="my-1">Conjugate</h6> $$\\overline{z} = r e^{\\hat{n} (-\\theta)}$$ <h6 class="my-1">Quadratic Form</h6> $$|z|^2 = z\\overline{z} = r^2$$ <h6 class="my-1">Multiplicative Inverse</h6> $$z^{-1} = \\frac{\\overline{z}}{|z|^2} = \\frac{1}{r} e^{\\hat{n} (-\\theta)}$$ </p></div><div class="bg-bg-light text-center"><h5 class="my-2 h-6">Conversions</h5></div><div class="bg-bg p-2"><p class="my-1"> Given $z = re^{\\hat{n} \\theta}$ we obtain: $$ \\begin{align*} a &amp;= r\\cosk{\\N}(\\theta) \\\\\\\\ b &amp;= r\\sink{\\N}(\\theta) \\end{align*} $$ </p><p> Given $z = a + \\hat{n} b$ we obtain: $$ \\begin{align*} r &amp;= \\sqrt{a^2 + \\N b^2}\\\\\\\\ \\theta &amp;= \\tank{\\N}^{-1}(\\frac{b}{a}) \\end{align*} $$ </p></div><div class="bg-bg-light text-center"><h5 class="my-2 h-6">Operations</h5></div><div class="bg-bg p-2"><h6 class="my-1">Exponential</h6><p> Using $e^{x+y} = e^{x} e^{y}$: $$ e^{z} = e^{a + \\hat{n} b} = e^{a} e^{\\hat{n} b} $$ </p><h6 class="my-1">Logarithm</h6><p> Using $\\ln(x y) = \\ln(x) + \\ln(y)$: $$ \\ln(z) = \\ln(re^{\\hat{n} \\theta}) = \\ln(r) + \\hat{n} \\theta $$ </p><h6 class="my-1">Exponentiation</h6><p> $$ \\begin{align*} z_0^{z_1} = e^{\\ln(z_0)\\, z_1} \\\\\\\\ ^{z_1}z_0 = e^{z_1 \\ln(z_0)} \\end{align*} $$ </p></div><div class="bg-bg p-2 lg:row-span-full"></div></div><h2 id="references" tabindex="-1"><a class="header-anchor" href="#references" aria-hidden="true">#</a> References</h2>',6),je={href:"https://www.elsevier.com/books/complex-numbers-in-geometry/yaglom/978-1-4832-5663-4",target:"_blank",rel:"noopener noreferrer"},we=l("Yaglom"),Fe={href:"https://link.springer.com/book/10.1007/978-1-4757-5325-7",target:"_blank",rel:"noopener noreferrer"},Ne=l("Rosenfeld");function Ce(Ie,Me){const a=n("multiplication-table"),t=n("ExternalLinkIcon");return h(),d($,null,[b,e("div",m,[g,e("div",_,[e("p",u,[y,f,z,i(a,{value:[["","1","i","j","k"],["1","1","i","j","k"],["i","i","-1","+k","-j"],["j","j","-k","-1","+i"],["k","k","+j","-i","-1"]]})])]),x,k,e("div",j,[e("p",w,[F,N,C,i(a,{value:[["","1","i","j","k"],["1","1","i","j","k"],["i","i","-1","+k","-j"],["j","j","-k","0","0"],["k","k","+j","0","0"]]})])]),I,e("div",M,[e("p",Q,[G,E,S,i(a,{value:[["","1","i","j","k"],["1","1","i","j","k"],["i","i","-1","+k","-j"],["j","j","-k","+1","-i"],["k","k","+j","+i","+1"]]})])])]),R,e("div",A,[O,e("div",U,[e("p",K,[q,P,L,i(a,{value:[["","1","i","j","k"],["1","1","i","j","k"],["i","i","-1","+k","-j"],["j","j","-k","-1","+i"],["k","k","+j","-i","-1"]]})])]),H,T,e("div",V,[e("p",B,[D,W,Y,i(a,{value:[["","1","i","j","k"],["1","1","i","j","k"],["i","i","0","+k","0"],["j","j","-k","0","0"],["k","k","0","0","0"]]})])]),J,e("div",X,[e("p",Z,[ee,le,ie,i(a,{value:[["","1","i","j","k"],["1","1","i","j","k"],["i","i","0","+k","0"],["j","j","-k","+1","-i"],["k","k","0","+i","0"]]})])])]),ae,e("div",se,[te,e("div",ne,[e("p",ce,[he,de,$e,i(a,{value:[["","1","i","j","k"],["1","1","i","j","k"],["i","i","-1","+k","-j"],["j","j","-k","-1","+i"],["k","k","+j","-i","-1"]]})])]),oe,re,e("div",pe,[e("p",ve,[be,me,ge,i(a,{value:[["","1","i","j","k"],["1","1","i","j","k"],["i","i","-1","+k","-j"],["j","j","-k","0","0"],["k","k","+j","0","0"]]})])]),_e,e("div",ue,[e("p",ye,[fe,ze,xe,i(a,{value:[["","1","i","j","k"],["1","1","i","j","k"],["i","i","+1","+k","+j"],["j","j","-k","+1","-i"],["k","k","-j","+i","-1"]]})])])]),ke,e("ul",null,[e("li",null,[e("a",je,[we,i(t)])]),e("li",null,[e("a",Fe,[Ne,i(t)])])])],64)}var Ee=c(v,[["render",Ce],["__file","overview-unification.html.vue"]]);export{Ee as default};
