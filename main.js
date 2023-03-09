//ascending order

			let a=[4,7,-8,0,4,9,25,2];
			function asce(a){
			for(i=0;i<a.length;i++){
				for(j=i+1;j<a.length;j++){
				if(a[i]>a[j]){
					a1=a[i];
					a[i]=a[j];
					a[j]=a1;
					}
				}
			}
			console.log(a)
			}
			asce(a);