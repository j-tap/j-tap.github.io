var oDoc = document.documentElement,
	iScrlTop = (window.pageYOffset || oDoc.scrollTop) - (oDoc.clientTop || 0),

	eHead = document.getElementById('header'),
	eMain = document.getElementById('main'),
	eCont = document.getElementById('content'),
	eMap = document.getElementById('map'),
	eAside = document.getElementById('aside'),

	ePopups, headerMsg, mapLeftbar, openCam, map, heightContent, asideFix;

function initMap () {
	var uluru = {lat: 52.4847275, lng: 13.2287155};
	var gmap = new google.maps.Map(document.getElementById('mapPlane'), {
		zoom: 10,
		center: uluru,
		disableDefaultUI: true
	});

	map = new Mapper();
	map.init(gmap);
}

document.addEventListener('DOMContentLoaded', function () {
	heightContent = new HeightContent();
	asideFix = new AsideFix();
	headerMsg = new HeaderMsg();
	mapLeftbar = new MapLeftbar();
	openCam = new OpenCam();
	
	var eWrapScrl = document.querySelectorAll('.js-scroll');
	for (var i = 0; i < eWrapScrl.length; i++) {
		SimpleScrollbar.initEl(eWrapScrl[i]);
	}

	var eSelect = document.querySelectorAll('select.field');
	for (var i = 0; i < eSelect.length; i++) {
		var select = new Select(eSelect[i], {});
	}

	var eAllPopups = document.querySelector('.popup');
	if (eAllPopups) ePopups = new Popup(eAllPopups);

})

window.addEventListener('resize', function() {
	heightContent.calc();
})
window.addEventListener('scroll', function () {
	iScrlTop = (window.pageYOffset || oDoc.scrollTop) - (oDoc.clientTop || 0);

	asideFix.calc();
});

function OpenCam () {
	var self = this;
	this.eAllBtn = document.querySelectorAll('a[data-opencam]');

	for (var i = 0; i < this.eAllBtn.length; i++) {
		self.eAllBtn[i].addEventListener('click', function (e) {
			e.preventDefault();
			var idCam = this.getAttribute('data-opencam');
			console.info(idCam);
			ePopups.open(document.getElementById('mapPopupOpenCam')); 
			return false;
		})
	}
}

function Mapper () {
	var self = this;

	this.geoMark = {
		url: ('data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAyCAQAAACEulEbAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfiBQ8PMxTiNnl/AAADUElEQVRIx6WXS0iUURiGnzljzmSNpjVdpCQQEqtFORaBRKnRopahlRcoSheSLoJWbjKIVkGbapGoi5ooJOhCiyIqitDSLhjYCMXgZYyMTJ0w59rChnHmnDP/7/iuZt7zfc+c25zzHUsjWglcVOJiK06cBPEzyhD9POcdYV2SRQPMp4l6CjRZPm5ylWGzwFwu0ICN1ArQRSs/5WEl6whDnDHEQSaNeKhJDbRylW7WGMJiyuMW7WTqgDbu02QaFtMpHpKlAi7jHocXjQM4yP14L+PAKxxKCwdwgGvJwOo0Bps48Pr5D/PbxskX8pYEhEmKmIAMAM7rcBnsYNdMoWXF8kjYP+sVbx2fCKlDc7nE6fkeFvD1PzhJOyM1/uzsRG962u34YFEig2zBa3VBK3vlVkH1dJXdJm1wm63UkjUzaIvKKVZCPBUIalU/Vz1ZkY1GlY7qKWVDHRmCPeTLLaXB8txUK1CeUxpU2OvZLdivWoq6WQxUO6ec9grBbkX/AsuzjYBZK0sDCrtEUCi7ZT+McABlEwqzSKhmcNMKM8BNWQpzvcAhu/aVZoB2RSYOQUR2oyFDmk5RgV92/06byZ1T7UW/YEx2v8+YAfp+K8xRwZDsvs4xA3y9SmEOCfpkt9c598twwJO9qxV2v+Cx7IZwGy6LO6QMeSYYwCv7PWt7B1Phegd7nAp7hD4BtKtSuoo/apEfPV3FyoYuopZG2IA38W6Nac9IjdWW9E+a87kjPRuVuACbGbe6wM9mSlQRozlPHVPfcsfsUWEnEpwY9z76014wrDs4OnHHLqkiPqsvgUUoxHY8sWvUQ8cScdCBB+LVVz4eTB0JGvkpwgfxi97HxSX178I8bmF9mMl7tqWJG8DF/zsmXtsEOEEwLVyQk/HMheVcH21pAdvoj39JLImtvKRskbhXlC8s4RMr2DBVsck1KR9HE18EyTX2OFUETOMCVDGeaMlF+xtaTANbeJNsWV1yWD+CfSZwbVyWTRUQXrCOXQa465xT2UIT3kx3Slw3zeoGHTDMce5qcXc4pnvtCW1SiBpuK1tuU6t/POqBEKaeTsntpF6P0y1KTFEeQEIF2cZZVfFiFgjwghEOYQWCNHDFKNzMwd/BGDeI0sAT4+B/kSndVr8Ar1wAAAAASUVORK5CYII='),
		size: new google.maps.Size(40,50),
		scaledSize: new google.maps.Size(40,50),
		origin: new google.maps.Point(0,0),
		anchor: new google.maps.Point(20,50),
		labelOrigin: new google.maps.Point(21,21)
	}
	this.beaches = [
		['A', 52.4847275, 13.2287155, 'Mitsubishi FUSO'],
		['B', 52.2051435, 13.3807555, 'Mercedes Benz Actos'],
		['C', 52.3493467, 13.5197811, 'FORD TRANSIT'],
		['D', 52.5990976, 13.1154590, 'Mercedes FUSO'],
		['E', 52.7780002, 13.0461115, 'FORD Actos']
	];

	this.init = function (map) {
		this.map = map;

		this.infoWindow = new google.maps.InfoWindow({map: this.map});

		this.setMarkers();
		this.setButtons();
	}
	this.setMarkers = function () {
		for (var i = 0; i < self.beaches.length; i++) {
			var beach = self.beaches[i],
				marker = new google.maps.Marker({
					position: {lat: beach[1], lng: beach[2]},
					map: self.map,
					label: beach[0],
					icon: self.geoMark,
					label: {
						text: beach[0],
						color: '#000',
						fontSize: '14px',
						fontWeight: '500'
					},
					title: beach[3]
				}); 

			marker.addListener('click', function () {
				console.info('click to marker: '+ this.label.text +': '+ this.title);

				self.unactiveMarkers();

				self.curMarker = this;
				var oIcon = Object.create(self.geoMark);
				oIcon.url = ('data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAyCAMAAAAZbWmiAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABnlBMVEXxSxbxSxbxSxbxSxbxSxbxSxbxSxbxSxbxSxbxSxbxSxbxSxbxSxbxSxbxSxbxSxbxSxbxSxbxSxbxSxbxSxbxSxbxSxbxSxbxSxbxSxbxSxbxSxbxSxbxSxbxSxbxSxbxSxbxSxbxSxbxSxbxSxbxSxbxSxbxSxbxSxbxSxbxSxb7x7b+8Oz//fz/+/r+7ObxSxb2hWH+7+r2hWHxSxbxSxb5sZr5sZrxSxb5s5z5spvxSxbxSxbxSxb2iGXxSxb+9PH+9PDxSxbxSxb2jWv2jWzxSxbxSxb808X808X+9PH//v3//v3//PvxSxb+9PD+9vPxSxb818z818z2kXD2kXDxSxbxSxb+9/X+9/XxSxb2jWv2jWvxSxb6v6zxSxbxSxbxSxb7x7b7x7bxSxbxSxb2jWz+9/X2jWz3lXb83tT++Pb//v73lXbxSxbxSxbxSxbxSxbxSxbxSxbxSxbxSxbxSxbxSxbxSxbxSxbxSxbxSxbxSxbxSxbxSxbxSxbxSxbxSxbxSxbxSxbxTxv2iGX2h2T////xTRnxUBwbnKS6AAAAg3RSTlMAAjV4q9Xq+u7SrHk4AxqE4eWJHhGT+PmZFFPr7VqVnAYHtLkKBbW7Vl0V8vP8+fD7/fH+IIrx8ovu8OcEOvp68fN8sPn5rtPj5O76+/bs6OzR29zq7Kp37e4t6erf1uIBe9bYghnh5ePd0+j73psn83XUNDPEwmeBgJapqKaeYmFHRjpIrQ4AAAABYktHRIf72QvLAAAAB3RJTUUH4gUPEC45T/+tWwAAAfZJREFUSMeFlelb00AQxgcaDFexBTFVK+VUDtFaDxSbqshZVORSkatVKgoo9aJSpYpbCP7XBNrsbHazyftpdt7fk312MzsDwKqi0qdUnSFqdU1tXb0fZGo4GyCMgo1Njti55vOEkxa6IHIXLxEHhS9zmL+FSBRpZbm2diJVRydyXVeIi67iN1uIqyIW10081FPiesNeYHWvuHHxoO9a//UbfYdFYfOmKJO5GTPKit1i0uptE7yD66O7BqOBI3TumXUQxOV9w6ZBdB7EQcdVwuCUQE+Hh3iORzz4GE80BE9oPGwIGqHmKIzReFwEJ6hZBXjbSRFMUjMMKo0nRfAp3iRgWT9zAzV4TuMpEXzBbD1N4xkRnKXmNCg0nhPBeWq+hFd44a95buE/NX3wBn/TIg8uoVcJsIyrFTu3gs5qCiDNlNlblnvHlNmaWY8ZjanQ9+sWtv6BSWuZkxKPMBlS/LixubW1ufHJ9hQ+n76ZbfYtOCq6XXqGIS8wZLW7rDuXbbA6gM8d/EJbSutXN66mC7vUN1XOqd/ZvpeWg2l7I/0h43a4np8JOnPBDN/Ddc2J03Sx2+ecwJzT/PgpcrvOAynPc3nJ5PIrdk6RDrn4L5b7LR+G4N9Dbs+FM8mCxRVcOYDUbvm8KfDSH7NA1L+emKn91cA/MXsMC4LDnuBPDeIAAAAASUVORK5CYII=');

				this.setIcon(oIcon); 

				mapLeftbar.open();
			});
		}
	}

	this.unactiveMarkers = function () {
		if (self.curMarker) self.curMarker.setIcon(self.geoMark);
	}

	this.setButtons = function () {
		var zoomControlDiv = document.createElement('div'),
			zoomControl = new ControlSet(zoomControlDiv);

		zoomControlDiv.index = 1;
		this.map.controls[google.maps.ControlPosition.BOTTOM_LEFT].push(zoomControlDiv);

		function ControlSet (controlDiv) {
			controlDiv.style.padding = '0 0 70px';
			controlDiv.style.left = '0';
			var controlWrapper = document.createElement('div');
			controlWrapper.style.borderWidth = '0';
			controlWrapper.style.marginLeft = '-6px';
			controlWrapper.style.textAlign = 'center';
			controlDiv.appendChild(controlWrapper);

			var btn = document.createElement('div');
			btn.style.width = '40px'; 
			btn.style.height = '40px';
			btn.style.borderRadius = '20px';
			btn.style.marginTop = '20px';
			btn.style.backgroundColor = '#fff';
			btn.style.cursor = 'pointer';
			btn.style.background = 'no-repeat 50% 50%';

			var zoomInButton = btn.cloneNode(),
				zoomOutButton = btn.cloneNode(),
				geoPosButton = btn.cloneNode();

			zoomInButton.style.backgroundImage = 'url("data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAQAAADbJyoPAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfiBRABLi7ZsqYSAAAEUklEQVRo3s2av2/TQBTHv2cnjm2k8kMdqrZhaqdOVJ3J3IkuIBbaMvAH8B8U5lbMpWWAjUqVIgFFjK3YWtGJCbYqqEihTIQ0rfIYSBz7fHfv7BjaF8WJz757n3zv2bl7Z4G8JgzHqPgmizg/E5Z941kxciDZuRAZynWOLYB4GJGrlto5AyQyHjWXpJ3ZlFjBCOs9TgPTnkWjQrsvmNqk/E6GsxgYnQpCU0sY3OmAFDh8eArmU2XEfGpwzAGpBuBwkq5NQBKOPjbUCOmtDka3NeDwgTpwLH8zBzAlIHQ4Bhg1ShKC00bWQgWlwVFfqDJKGsQGJg3E4JSgN2F6zzj1ubHb3mxpSoyLEKAWfTv/2vl0vLdw8LkbcyQUb9ZE9HLgwIELFyWUUEYZHjxU4MNHgADh7nRrtXtEGusetVZ3pxEiQAAfPirw4KGMMkoowYXb8zDwqIVRoVQilHB78vdzOiXOTn8/355EGOFUjDhGXdweTBwlQICw+aDbZEH6CjWbi5E+cRw3wtFoo9Ol30EBgvmR9oYtSN/aG/MjEc7fzmK1sUBZGT3byYpCRHS2szKaDUcF0+8iHz6C+ZGzt3lQiIjO3s6PxEJ50FUWMHFd+tEStjfzohARtTd7odyPnLg2EoxZlwBhc3EYFCKi5nKEw2jD6LI9aX8F6ax78uamnTZpmIQu2a8hpqtkbSIYR/l/hAHpx2plib9981ZZ/FiNhUXaI+IwieKBYrOPUC4CBuXZR4obXGLPMY/1Zhz/Pu/nNbYsaPz7M/GfrvDrKOtF/PU5McG7+YaGBYyYqM/J7SfNiQ7LvAICYqxm4cXaxm5LHSV5dczVvVtFwniz5uPmXkRpukgYZWsxr4wyYqxIGK61+DUvov1onEE/4akrbmmDdgL3dN464jooeiHa9sbBjDJ5LGcOTalMfNQnukfiBt/IMwCPbTBPnGpMmdScgVGGjgvVjGktDqPQ9/xLkTDK1mJeGWU6h0XCdD7ZKaOa5xHo+16RMMd7UawovaqViSrc2SeLv51xjFugUGPhQG4/bbpxno8AYWu1iKEVEVFrNTG8So/1JGXkzBKB9tfRKaSPOvvrUielPDqp4n7uoLdfa7RfFsFy+qrW73CCJluji5mYNjtP6WRYFDp59yShCxMzpqnK0rDx8uOh7VTln0/iTl/YT+IsprfL14aZ3i5fyzu91U/8P+RCeZ914m+Fc/dq9s5qb969mhXFPlm0lClZtJwvWWSdRqtX2xs2abT2Rr2aN42WNcG41m1oFWm01vIlGE15YD71WvNulabEhLgC0C9qnH/tHB7vLhx87iqzv+kUtXQDvFRJaVfqKh2O6hy1DZGud6Wm+IUMDmiIhQw9jGmJx4yUZYknYW6qxH7xy0aboRa/0mUXuiyox7mQBVOdu/SR/7KUbNaHq8epkHmRXXf0wh4/0J9xIQ9mcGf990dWsp+ZCySPi0vymFOWmjmTV38APPRKlxdxo3EAAAAASUVORK5CYII=")';
			zoomOutButton.style.backgroundImage = 'url("data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAQAAADbJyoPAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfiBRABLxboqy/NAAAEM0lEQVRo3s2av08UQRTHv7N7v/Y0SAwFEc5KKioJNdRU0mBsBCz8P9Aa/gB+WGhFTEguETGWEDoIVFTakTOYnHTicpB9FnJ7u7Mz82b3RvFt7sfO7Mz73Hfe7u28WYGiJgx15L5LF8fnwrLvPC9GASQ7FyJHuc6xBRAPIwq1UjtngETOWnNJ1plNiRWMsN7jNDDtWXQqtPuCaU3K72Q4ioHRqSA0rYTBnQ5IgcOHp2A+VUbMpwbHHJBqAA4n7doEJOHoY0ONkH3XwejeDTh8oPYcy9/MAUwpCB2OAUaNkobgtJG1UEFpcNQnqoySBbGByQIxOCXoTZhe415zcniqMlF6JB6IOkAX9O36a+fobG/28CRKOBKKF2si3jx48ODDRwkllFFGBRVUUUMNAQLUd8culqNT0lh0erG8O4Y6AgSooYYqKqigjDJKKMGHf+Oh51ELo0Kpxij1rdFfa3RJnF3+WtsaRT3GqRpxjLr4NzBJlAAB6u3nUZsF6SrUbs/H+iRx/BhHo41Ol+4ABQhmBsJ1W5CuheszAzHOn8FitbFAWRq62smLQkR0tbM0lA9HBdMdohpqCGYGrraLoBARXW3PDCRCuTdUFjBJXbrRUg83iqIQEYUbN6HcjZykNhKMWZcA9fZ8PyhERO3FGIfRhtFla9T+DNJZdP7hoZ02WZiULvnPIWaoZG1iGE/5f4Qe6X6jusBfvnmrzu83EmGR9YgkTKq4p9jES5RdwKA88VJxgUvteeZ7vXGv9swJCoDas/HkT1f49ZTtYv7mpBhxBSNGmpNy/2nz4mqZV0BADE+7QgGA4SlpoCSvnrl55bFLmMqEud48iiiNuYRR9pbwyigjhl3CcL1lbzvTf+d3dQ3fo6WpGcFTHUy6t8wNKKNMESuYQ0P6ath7xVt0Ku47xDz3GqDEJs0ZGGXozKlmTG9JGIW+119cwih7S3hllOkcu4TpHNkpo5rnEej7nkuYs704VpRe1crEDZ4cUAuOjFqzh3L/sjLGFOBJFG66ggk3E9NeZeoxrYycWSLQwSo6Tlg6B6vSIGU8epnibu7gZn+6Fb51wXL5bro74ARNtkYXMwltdl7Teb8odP7xVUoXQ/qVm6os9Hs7/uOF7VTlr0/iLt/YT+IspreLg/1MbxcHi05v9RP/z4VQPuWd+FvhzN3LP1jhxty9vCj2yaKFXMmixWLJIus0WrMRrtuk0cL1ZqNoGi1vgnElamkVaV2sFEswmvLAfOp1uvK49EiMiDsA/aTW9dfO8dnu7OFJpMz+ZlPU0gXwv0pK+9JQ6XBUx6itj3S9L3XFL2RwQH0sZOhhTEs8ZqQ8Szwp8zMl9otfNtr0tfiVLbvVZUE9zq0smOrcZWv+yVKyWR+uHadC7kV2Xe2tPX6gP+JWHszgjvrnj6zkP7IQSBEX/8ljTnlaFkxe/QbZgPr3T0biwgAAAABJRU5ErkJggg==")';
			geoPosButton.style.backgroundImage = 'url("data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAQAAADbJyoPAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfiBRACARF/jg0bAAAFOElEQVRo3s2aTU8bRxjHf4ONlzURiSoioWI3amOkqlGFgiL10CYRN2haKZdIuRRoqnyCfIG05+QDBGjPXCJFbULICSXikDYoKKqQKvEiVUBFW5cTNTYQTw/Y67V33nahIY/ll53Zmefn/8zuzDyzgqQmDHny6Ks8ivNjYblXHhcjAZKbCxEjXefYAcgOIxKVUju3AImYueaUqDOXFCcY4Xxk08B05FCp0B4LS2mp/C0NZ1lgdCoITSlhcKcDUuDYu6ewfKtMWr41OOYOqQaw4TS7NgG14Oj7hhoh+qmD0X0acOwdteG49Ze5A8smCB2OAUaN0gxh06ZVCxWUBkd9obaiREFcYKJAFpw0ehOm97m2Bxd6LmUG0gXxrsiCLMk/9pd3X24+uzq/WA05Eoq31UTwaqONNlKkSJOmnXYyZPDooAMfn+zTvtKd6prUWHWtdOdpH1l8fDrowCNDhnbaSZMmRarmoeFRC6NC8QKU7P3czrisSJtVdsbv58gGOJ4Rx6hLqgYTRvHxyRa/qhatIHWFisWRQJ8wTirA0Wij06XeQD7+cFd5whWkbuWJ4a4A56CxrNo4oNzu3puOiyKllHvTt7vj4ahg6k3UQQf+cNfewyQoUkq593C4K9SVG03lABPWpd5bsuXJpChSSlmerHXles8Ja9MCY9bFJ1scOQyKlFIWxwIcizYWXe7n3K8gnVW3fnrPTZsoTJMu8a8hS1O1ahPAtCnHIxqkc3lv1Hbzfs5z6w3eG5nLh7pF1CNhmKbkhmIDN2m3OSpRssLQPnBTcYOL3GEaySJIqUl3LvXrb6LX5GOdZVaAsxTIGWnkxscfLr5G1l4En8G4rYYJgJY+Kczqq99mhr/poxsoskQ3w5ww4CwP9v0cAonA1KcQ0bmbQCB6LptQpsjxJV7t+CKzTHHdgNNziV8ORAp8yPB3G0bLnNfnPSHHEB4VVlihgscQOWZMtQ2YvYUnV4p5RbpPV3CDv7gB/M4jfGCHK5xhkB9Y1/YdZW3CbaYHiB5dzgoFPCpM8yn9wCumuYFHH6taGH1tBxZtpuaLTdkB5pljldPAOp30A9BPJ+tAN6vM1bpGpOoTek9qGEera/s6SHkdyk1WbbSZZJhYbot3ooUuAFWKQI4yr2rNtEMOKPI+n+n+wLby/xhgms/fVMEAnOVHLuLxOY9YAEpcwaPCEl8YanNXRkZbcX8p85G6YC+nmWWIM3zDGpDHA2Y5TR6d7S+pCBs/LY27u6DPG2KdGfbwKFDAY48Z1hky1fbSTZm6Kg11JMCfz/T30xNc5zGTTcPBdeNwsPksGASaVTGOTTEGyjWWWQU+oGBoIHAZKNOKnhJKWayWp/xbJhd58khgEJuVp0LLXmXosbnPtEaWJPLFPXZtbnx8Kwq7L+61NJISyTLt3Bk/kmnnRJxpp4pXIpHT38kt+x83m9x69G2TLobwq22pMnpYXf752nWp8r8v4irfuy/iHJa3Y6cOs7wdO5V0eatf+D9JhPI47sLfCefayfiNVZ68djIuinuwaDRWsGgsWbDIOYz2IF+ecAmjlSce5JOG0eIGGO9WN7SKbJTuJgswmuLA9tDr5cz5dEH0ik6Q/8qN/eXdhc2nV+cXq8robzRE3XIDfKuC0qmWptLhqM5R2yHC9amWquwbGTagQ2xk6GFMWzxmpDhbPE2WiqS4b365aHOoza9o2rFuC+pxjmXDVOcumvNGtpLN+tjK2VSIvcmuyz22xw/0ZxzLgxm2s974Iyvxz0wEksTFW/KYU5ySCR8A+w+2dpWkCFGzOgAAAABJRU5ErkJggg==")';
			
			controlWrapper.appendChild(geoPosButton);
			controlWrapper.appendChild(zoomOutButton);
			controlWrapper.appendChild(zoomInButton);

			google.maps.event.addDomListener(zoomInButton, 'click', function() {
				self.map.setZoom(self.map.getZoom() + 1);
			});

			google.maps.event.addDomListener(zoomOutButton, 'click', function() {
				self.map.setZoom(self.map.getZoom() - 1);
			});

			google.maps.event.addDomListener(geoPosButton, 'click', function() {
				if (navigator.geolocation) {
					navigator.geolocation.getCurrentPosition(function (position) {
						var pos = {
							lat: position.coords.latitude,
							lng: position.coords.longitude
						};

						self.infoWindow.setPosition(pos);
						self.infoWindow.setContent('Location found.');
						self.map.setCenter(pos);
					}, function () {
						handleLocationError(true, self.infoWindow, self.map.getCenter());
					});
				} else {
					// Browser doesn't support Geolocation
					handleLocationError(false, self.infoWindow, self.map.getCenter());
				}

				function handleLocationError (browserHasGeolocation, pos) {
					self.infoWindow.setPosition(pos);
					self.infoWindow.setContent(browserHasGeolocation ?
						'Error: The Geolocation service failed.' :
						'Error: Your browser doesn\'t support geolocation.');
				}
			});
		}
	}
}

function tabs (eTabs) {
	var self = this;
	this.eTabs = eTabs;
}

function MapLeftbar () {
	var self = this;
	this.eBar = document.getElementById('mapLeftbar');

	if (this.eBar) {
		this.eBarBack = document.getElementById('mapLeftbarBack');
		this.eBarBack.addEventListener('click', function (e) {
			e.preventDefault();
			self.close();
			return false;
		})
	}

	this.open = function () {
		self.eBar.classList.add('open');
	}
	this.close = function () {
		self.eBar.classList.remove('open');
		map.unactiveMarkers();
	}
}

function Popup (elem) {
	var self = this;
	this.elem = elem;
	this.eOverlays = document.querySelectorAll('.popup-overlay');

	for (var i = 0; i < this.eOverlays.length; i++) {
		self.eOverlays[i].addEventListener('click', function (e) {
			self.close(this.parentNode);
		})
	}

	this.eAllLinksPopup = document.querySelectorAll('a[data-popup]');
	for (var i = 0; i < this.eAllLinksPopup.length; i++) {
		self.eAllLinksPopup[i].addEventListener('click', function (e) {
			e.preventDefault();
			var sid = this.getAttribute('data-popup'),
				ePopup = document.getElementById(sid);
			if (ePopup) {
				self.clearActive(sid);
				this.classList.add('active-popup');
				self.open(ePopup);
			}
			return false;
		})
	}
	
	this.elem.querySelector('.popup-close').addEventListener('click', function (e) {
		e.preventDefault();
		self.close(self.elem);
		return false;
	})

	this.open = function (popup) {
		popup.classList.add('show');
	}
	this.close = function (popup) {
		this.clearActive(popup.getAttribute('id'));
		popup.classList.remove('show');
	}

	this.clearActive = function (sid) {
		var eAllLinks = this.getSimilar(sid);
		for (var i = 0; i < eAllLinks.length; i++) {
			eAllLinks[i].classList.remove('active-popup');
		}
	}
	this.getSimilar = function (sid) {
		this.eAllLinksPopup = document.querySelectorAll('a[data-popup="'+ sid +'"]');
		return this.eAllLinksPopup;
	}
}

// toggle message in header
function HeaderMsg () {
	var self = this;
	this.eBtn = document.getElementById('headerMsgBtn');
	this.eList = document.getElementById('headerMsgList');

	if (this.eBtn && this.eList) {
		this.eBtn.addEventListener('click', function (e) {
			e.preventDefault();
			self.tgl(this);
			return false;
		});
	}

	this.tgl = function (target) {
		var iMaxHeight = (window.innerHeight - eHead.offsetHeight);
			iHeight = 640;
		if (iMaxHeight < iHeight) iHeight = iMaxHeight;

		target.isClick = (!target.isClick);
		target.classList.toggle('active');
		self.eList.isOpen = target.isClick;
		self.eList.classList.toggle('open');

		if (target.isClick) self.eList.style.height = iHeight +'px';
		else self.eList.style.height = 0;
	}
}

// calc and set height content
function HeightContent () {
	var self = this;
	if (eAside) {
		this.asideStyle = eAside.currentStyle || window.getComputedStyle(eAside),
		this.iWinHeightOutHead = window.innerHeight - eHead.offsetHeight,
		this.iAsideHeight = eAside.offsetHeight + parseInt(this.asideStyle.marginTop) + parseInt(this.asideStyle.marginBottom);
	}
	eBlock = eCont;// || eMap;

	this.calc = function () {
		if (eAside && eBlock) {
			if (eBlock.offsetHeight < this.iWinHeightOutHead || eBlock.offsetHeight < eAside.offsetHeight) {
				if (this.iWinHeightOutHead > this.iAsideHeight) {
					eBlock.style.height = this.iWinHeightOutHead +'px';
				} else {
					eBlock.style.height = this.iAsideHeight +'px';
				}
			}
		}
	}

	this.calc();
}

function AsideFix () {
	if (eAside) {
		this.asideStyle = eAside.currentStyle || window.getComputedStyle(eAside),
		this.iWinHeightOutHead = window.innerHeight - eHead.offsetHeight,
		this.iAsideHeight = eAside.offsetHeight + parseInt(this.asideStyle.marginTop) + parseInt(this.asideStyle.marginBottom);
	}

	this.calc = function () {
		if (eAside && !eMap) {
			if (this.iAsideHeight < this.iWinHeightOutHead) {
				if (iScrlTop > eHead.offsetHeight) {
					if (!hasClass(eAside, 'm-fix')) {
						eAside.classList.add('m-fix');
						eAside.style.top = (eHead.offsetHeight * -1) +'px';
					}
				} else {
					if (hasClass(eAside, 'm-fix')) {
						eAside.classList.remove('m-fix');
						eAside.style.top = 0;
					}
				}
			} else {
				var n = this.iAsideHeight - this.iWinHeightOutHead;
				if (iScrlTop > n) {
					if (!hasClass(eAside, 'm-fix')) {
						eAside.classList.add('m-fix');
						eAside.style.top = (n * -1) +'px';
					}
				} else {
					if (hasClass(eAside, 'm-fix')) {
						eAside.classList.remove('m-fix');
						eAside.style.top = 0;
					}
				}
			}
		}
	}
}



function hasClass (elem, cls) {
	return (' '+ elem.className +' ').indexOf(' '+ cls +' ') > -1;
}



/*
* AsterismCustomSelect
* https://github.com/anasterism/asterism-select
*/
var Select=function(t,i){this.target=null,this.select=null,this.display=null,this.list=null,this.options=[],this.isLarge=!1,this.value=null,this.selected=null,this.settings=null,this.highlighted=null,this.init=function(){switch(typeof t){case"object":this.target=t;break;case"string":this.target=document.querySelector(t)}this.settings=this.getSettings(i),this.buildSelect(),this.target.parentNode.replaceChild(this.select,this.target),this.target.style.display="none",this.select.appendChild(this.target),document.addEventListener("click",this.handleClickOff.bind(this)),this.positionList()},this.buildSelect=function(){this.select=document.createElement("div"),this.select.classList.add("select"),this.select.setAttribute("tabindex",this.target.tabIndex),this.select.addEventListener("keydown",this.handleSelectKeydown.bind(this)),this.display=document.createElement("span"),this.display.classList.add("value"),this.display.addEventListener("click",this.handleDisplayClick.bind(this)),this.select.appendChild(this.display),this.buildList(),this.options.length&&(this.value=this.options[this.target.selectedIndex].getAttribute("data-value"),this.selected=this.options[this.target.selectedIndex],this.display.innerHTML=this.selected.innerHTML),("auto"===this.settings.filtered&&this.options.length>=this.settings.filter_threshold||this.settings.filtered===!0)&&(this.isLarge=!0,this.select.classList.add("large"))},this.buildList=function(){this.list=document.createElement("div"),this.list.classList.add("list"),this.list.setAttribute("tabindex","-1"),this.list.addEventListener("keydown",this.handleListKeydown.bind(this)),this.list.addEventListener("mouseenter",function(){this.options[this.highlighted].classList.remove("hovered")}.bind(this)),this.highlighted=this.target.selectedIndex,this.buildFilter(),this.buildOptions(),this.select.appendChild(this.list)},this.buildFilter=function(){var t=document.createElement("div");t.classList.add("filter"),this.filter=document.createElement("input"),this.filter.type="text",this.filter.setAttribute("placeholder",this.settings.filter_placeholder),this.filter.addEventListener("keyup",this.handleFilterKeyup.bind(this)),t.appendChild(this.filter),this.list.appendChild(t)},this.buildOptions=function(){for(var t=document.createElement("ul"),i=this.target.querySelectorAll("option"),e=0;e<i.length;e++){var s=document.createElement("li");s.setAttribute("data-value",i[e].value),s.innerHTML=i[e].innerHTML,s.addEventListener("click",this.handleOptionClick.bind(this)),t.appendChild(s),this.options.push(s)}this.list.appendChild(t)},this.toggleList=function(){this.list.classList.contains("open")?(this.list.classList.remove("open"),this.options[this.highlighted].classList.remove("hovered"),this.select.focus()):(this.options[this.target.selectedIndex].classList.add("hovered"),this.highlighted=this.target.selectedIndex,this.list.classList.add("open"),this.list.focus())},this.positionList=function(){this.isLarge||(this.list.style.top="-"+this.selected.offsetTop+"px")},this.highlightOption=function(t){var i=null;switch(t){case"up":i=this.highlighted-1<0?this.highlighted:this.highlighted-1;break;case"down":i=this.highlighted+1>this.options.length-1?this.highlighted:this.highlighted+1;break;default:i=this.highlighted}this.options[this.highlighted].classList.remove("hovered"),this.options[i].classList.add("hovered"),this.highlighted=i},this.clearFilter=function(){this.filter.value="";for(var t=0;t<this.options.length;t++)this.options[t].style.display="block"},this.closeList=function(){this.list.classList.remove("open"),this.options[this.highlighted].classList.remove("hovered")},this.getSettings=function(t){var i={filtered:"auto",filter_threshold:8,filter_placeholder:"Filter options..."};for(var e in t)i[e]=t[e];return i},this.handleSelectKeydown=function(t){this.select===document.activeElement&&32==t.keyCode&&this.toggleList()},this.handleDisplayClick=function(t){this.list.classList.add("open"),this.isLarge&&this.filter.focus()},this.handleListKeydown=function(t){if(this.list===document.activeElement)switch(t.keyCode){case 38:this.highlightOption("up");break;case 40:this.highlightOption("down");break;case 13:this.target.value=this.options[this.highlighted].getAttribute("data-value"),this.selected=this.options[this.highlighted],this.display.innerHTML=this.options[this.highlighted].innerHTML,this.closeList(),setTimeout(this.positionList.bind(this),200),this.select.focus()}},this.handleFilterKeyup=function(t){var i=this;this.options.filter(function(t){t.innerHTML.substring(0,i.filter.value.length).toLowerCase()==i.filter.value.toLowerCase()?t.style.display="block":t.style.display="none"})},this.handleOptionClick=function(t){this.display.innerHTML=t.target.innerHTML,this.target.value=t.target.getAttribute("data-value"),this.value=this.target.value,this.selected=t.target,this.closeList(),this.clearFilter(),setTimeout(this.positionList.bind(this),200)},this.handleClickOff=function(t){this.select.contains(t.target)||this.closeList()},this.init()};

/*
* SimpleScrollbar
* https://github.com/buzinas/simple-scrollbar
*/
!function(t,e){"object"==typeof exports?module.exports=e(window,document):t.SimpleScrollbar=e(window,document)}(this,function(t,e){function s(t){Object.prototype.hasOwnProperty.call(t,"data-simple-scrollbar")||Object.defineProperty(t,"data-simple-scrollbar",{value:new o(t)})}function i(t,s){function i(t){var e=t.pageY-a;a=t.pageY,n(function(){s.el.scrollTop+=e/s.scrollRatio})}function r(){t.classList.remove("ss-grabbed"),e.body.classList.remove("ss-grabbed"),e.removeEventListener("mousemove",i),e.removeEventListener("mouseup",r)}var a;t.addEventListener("mousedown",function(s){return a=s.pageY,t.classList.add("ss-grabbed"),e.body.classList.add("ss-grabbed"),e.addEventListener("mousemove",i),e.addEventListener("mouseup",r),!1})}function r(t){for(this.target=t,this.direction=window.getComputedStyle(this.target).direction,this.bar='<div class="ss-scroll">',this.wrapper=e.createElement("div"),this.wrapper.setAttribute("class","ss-wrapper"),this.el=e.createElement("div"),this.el.setAttribute("class","ss-content"),"rtl"===this.direction&&this.el.classList.add("rtl"),this.wrapper.appendChild(this.el);this.target.firstChild;)this.el.appendChild(this.target.firstChild);this.target.appendChild(this.wrapper),this.target.insertAdjacentHTML("beforeend",this.bar),this.bar=this.target.lastChild,i(this.bar,this),this.moveBar(),this.el.addEventListener("scroll",this.moveBar.bind(this)),this.el.addEventListener("mouseenter",this.moveBar.bind(this)),this.target.classList.add("ss-container");var s=window.getComputedStyle(t);"0px"===s.height&&"0px"!==s["max-height"]&&(t.style.height=s["max-height"])}function a(){for(var t=e.querySelectorAll("*[ss-container]"),i=0;i<t.length;i++)s(t[i])}var n=t.requestAnimationFrame||t.setImmediate||function(t){return setTimeout(t,0)};r.prototype={moveBar:function(t){var e=this.el.scrollHeight,s=this.el.clientHeight,i=this;this.scrollRatio=s/e;var r="rtl"===i.direction,a=r?i.target.clientWidth-i.bar.clientWidth+18:-1*(i.target.clientWidth-i.bar.clientWidth);n(function(){i.scrollRatio>=1?i.bar.classList.add("ss-hidden"):(i.bar.classList.remove("ss-hidden"),i.bar.style.cssText="height:"+Math.max(100*i.scrollRatio,10)+"%; top:"+i.el.scrollTop/e*100+"%;right:"+a+"px;")})}},e.addEventListener("DOMContentLoaded",a),r.initEl=s,r.initAll=a;var o=r;return o});