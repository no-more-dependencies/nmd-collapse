# nmd-collapse

Hide and reveal your content easily and with style with this simple web component.

```
<nmd-collapse>
	mole 1<br>
	with default animation and duration (0.5s)
</nmd-collapse>
<button type="button" onclick="this.previousElementSibling.toggle()">Whack-A-Mole 1</button>
<nmd-collapse animation="simple" duration="1.5s">
	mole 2<br>
	with custom duration and same animation as before just set explicitly
</nmd-collapse>
<button type="button" onclick="this.previousElementSibling.toggle()">Whack-A-Mole 2</button>
<nmd-collapse animation="squish">
	mole 3<br>
	poor mole...
</nmd-collapse>
<button type="button" onclick="this.previousElementSibling.toggle()">Whack-A-Mole 3</button>
<nmd-collapse animation="flip">
	mole 4<br>
	yeet him away<br>
	<button type="button" onclick="this.parentElement.collapse()">Whack-A-Mole 4</button>
	<nmd-collapse animation="shrink">
		nested mole
	</nmd-collapse>
	<button type="button" onclick="this.previousElementSibling.toggle()">Whack-A-Nested-Mole</button>
</nmd-collapse>
<button type="button" onclick="this.previousElementSibling.expand()">Unwhack-A-Mole 4</button>
```

Just import `dist/nmd-collapse.js` into your document.