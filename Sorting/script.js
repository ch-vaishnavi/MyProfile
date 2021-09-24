const container = document.querySelector(".data-container");

// function to generate bars
function generatebars(num = 50) {
  
  for (let i = 0; i < num; i += 1) {
  
    const value = Math.floor(Math.random() * 1000) + 1; 
    const bar = document.createElement("div");
  
    bar.classList.add("bar");
    bar.style.height = `${value/3}px`;
    bar.style.transform = `translateX(${i * 20}px)`;
    const barLabel = document.createElement("label");
    barLabel.classList.add("bar_id");
    barLabel.innerHTML = value;
    barLabel.style.display = "none";
    bar.appendChild(barLabel);
    container.appendChild(bar);
  }
}

async function sort(arr) //heap-sort
{
    var n = arr.length;
    for (var i = Math.floor(n / 2) - 1; i >= 0; i--)
        await heapify(arr, n, i);

    for (var i = n - 1; i > 0; i--) {
        var temp = parseInt(arr[0].childNodes[0].innerHTML);
        arr[0].childNodes[0].innerHTML = arr[i].childNodes[0].innerHTML ;
        arr[0].style.height = `${parseInt(arr[i].childNodes[0].innerHTML)/3}px`;
        arr[i].childNodes[0].innerHTML = temp ;
        arr[i].style.height = `${temp/3}px`;
        arr[i] = temp;
        arr[i].style.backgroundColor = " rgb(49, 226, 13)";
        await heapify(arr, i, 0);
    }
  arr[0].style.backgroundColor = " rgb(49, 226, 13)";
}

async function heapify(arr, n, i)
    {
        var largest = i; 
        var l = 2 * i + 1; 
        var r = 2 * i + 2; 
        var larEle = parseInt(arr[largest].childNodes[0].innerHTML);
        if (l < n && parseInt(arr[l].childNodes[0].innerHTML) > larEle)
            largest = l;
            larEle = parseInt(arr[largest].childNodes[0].innerHTML);
 
        if (r < n && parseInt(arr[r].childNodes[0].innerHTML) > larEle)
            largest = r;
            larEle = parseInt(arr[largest].childNodes[0].innerHTML);
 
        if (largest != i) {
            var swap = parseInt(arr[i].childNodes[0].innerHTML);
            arr[i].style.backgroundColor = "red";
            arr[i].childNodes[0].innerHTML = larEle;
            arr[i].style.height = `${larEle/3}px`;
            arr[largest].style.backgroundColor = "yellow";
            arr[largest].childNodes[0].innerHTML = swap;
            arr[largest].style.height = `${swap/3}px`;
            await timeout(80);
            arr[i].style.backgroundColor = "turquoise";
            arr[largest].style.backgroundColor = "turquoise";
            // Recursively heapify the affected sub-tree
            await heapify(arr, n, largest);
            await timeout(100);
        }
    }
async function HeapSort(delay = 300)
{
  let bars = document.querySelectorAll(".bar");
  await sort(bars);

  document.getElementById("Button1").disabled = false;
  document.getElementById("Button1").style.backgroundColor = "#6f459e";
  
  document.getElementById("Button2").disabled = false;
  document.getElementById("Button2").style.backgroundColor = "#6f459e";

  document.getElementById("Button3").disabled = false;
  document.getElementById("Button3").style.backgroundColor = "#6f459e";

  document.getElementById("Button5").disabled = false;
  document.getElementById("Button5").style.backgroundColor = "#6f459e";

  document.getElementById("Button4").disabled = false;
  document.getElementById("Button4").style.backgroundColor = "#6f459e";
}

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function merge(arr, l, m, r)
{
    var n1 = m - l + 1;
    var n2 = r - m;
 
    var L = new Array(n1);
    var R = new Array(n2);
 
    for (var i = 0; i < n1; i++){
        arr[l+i].style.backgroundColor = "red";
        L[i] =  parseInt(arr[l+i].childNodes[0].innerHTML); //arr[l + i];
    }
    await timeout(80);
    for (var j = 0; j < n2; j++){
        arr[m + 1 + j].style.backgroundColor = "yellow";
        R[j] = parseInt(arr[m + 1 + j].childNodes[0].innerHTML) //arr[m + 1 + j];
    }
    await timeout(80);

    var i = 0;
    var j = 0;
    var k = l;
 
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k].style.height = `${L[i]/3}px`;
            arr[k].childNodes[0].innerHTML = L[i];
            arr[k].style.backgroundColor = "rgb(49, 226, 13)";
            i++;
        }
        else {
            arr[k].style.height = `${R[j]/3}px`;
            arr[k].childNodes[0].innerHTML = R[j];
            arr[k].style.backgroundColor = "rgb(49, 226, 13)";
            j++;
        }
        k++;
        await timeout(80);
    }
 
    while (i < n1) {
      arr[k].style.height = `${L[i]/3}px`;
      arr[k].childNodes[0].innerHTML = (L[i]) ;
      arr[k].style.backgroundColor = "rgb(49, 226, 13)";
        i++;
        k++;
        
        await timeout(80);
    }
 
    while (j < n2) {
        arr[k].style.height = `${R[j]/3}px`;
        arr[k].childNodes[0].innerHTML = (R[j]);
        arr[k].style.backgroundColor = "rgb(49, 226, 13)";
        j++;
        k++;
        await timeout(80);
    }
    
}
 
async function mergeSort(arr,l, r){
    if(l>=r){
        return;
    }
    var m =l+ parseInt((r-l)/2);
    await mergeSort(arr,l,m);
    await mergeSort(arr,m+1,r);
    await merge(arr,l,m,r);
    await timeout(100);
}

async function MergeSort(delay = 300) {
  let bars = document.querySelectorAll(".bar");

  //Merge Sort
  var l = 0;
  var r = bars.length-1;
  await mergeSort(bars,l,r);
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 100)
    );
  
  
    document.getElementById("Button1").disabled = false;
    document.getElementById("Button1").style.backgroundColor = "#6f459e";
    
    document.getElementById("Button2").disabled = false;
    document.getElementById("Button2").style.backgroundColor = "#6f459e";

    document.getElementById("Button3").disabled = false;
    document.getElementById("Button3").style.backgroundColor = "#6f459e";

    document.getElementById("Button5").disabled = false;
    document.getElementById("Button5").style.backgroundColor = "#6f459e";

    document.getElementById("Button4").disabled = false;
    document.getElementById("Button4").style.backgroundColor = "#6f459e";
  }

async function BubbleSort(delay = 300) {
  let bars = document.querySelectorAll(".bar");
   for (var i = 0; i < bars.length -1 ; i += 1) {
  
    for (var j = 0 ; j < bars.length -i -1; j += 1) {
      
      bars[j].style.backgroundColor = "red";
        bars[j+1].style.backgroundColor = "yellow";
        await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 100)
        );
      
      var val1 = parseInt(bars[j].childNodes[0].innerHTML);
      
      var val2 = parseInt(bars[j+1].childNodes[0].innerHTML);
        
      if (val1 > val2) {
        
      
        var temp1 = bars[j+1].style.height;
        var temp2 = bars[j+1].childNodes[0].innerText;
        bars[j+1].style.height = bars[j].style.height;
        bars[j].style.height = temp1;
        bars[j+1].childNodes[0].innerText = bars[j].childNodes[0].innerText;
        bars[j].childNodes[0].innerText = temp2;
        bars = document.querySelectorAll(".bar");
      }
      bars[j].style.backgroundColor = "turquoise";
      bars[j+1].style.backgroundColor = "turquoise";
    }
    bars[bars.length - i - 1]
                .style.backgroundColor = "rgb(49, 226, 13)";
   }
      
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 100)
    );
  
  
    bars[0].style.backgroundColor = "rgb(49, 226, 13)";
    document.getElementById("Button1").disabled = false;
    document.getElementById("Button1").style.backgroundColor = "#6f459e";
    
    document.getElementById("Button2").disabled = false;
    document.getElementById("Button2").style.backgroundColor = "#6f459e";

    document.getElementById("Button3").disabled = false;
    document.getElementById("Button3").style.backgroundColor = "#6f459e";

    document.getElementById("Button5").disabled = false;
    document.getElementById("Button5").style.backgroundColor = "#6f459e";

    document.getElementById("Button4").disabled = false;
    document.getElementById("Button4").style.backgroundColor = "#6f459e";
  }
  
async function SelectionSort(delay = 300) {
  let bars = document.querySelectorAll(".bar");
   var min_idx = 0;
   for (var i = 0; i < bars.length; i += 1) {
  
    min_idx = i;
  
    bars[i].style.backgroundColor = "yellow";
    for (var j = i + 1; j < bars.length; j += 1) {
  
      bars[j].style.backgroundColor = "red";
        
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 20)
      );
      var val1 = parseInt(bars[j].childNodes[0].innerHTML); 
      var val2 = parseInt(bars[min_idx].childNodes[0].innerHTML);
        
      
      if (val1 < val2) {
        if (min_idx !== i) {
  
          bars[min_idx].style.backgroundColor = "  turquoise";
        }
        min_idx = j;
      } else {
  
        bars[j].style.backgroundColor = "  turquoise";
      }
    }
  
    var temp1 = bars[min_idx].style.height;
    var temp2 = bars[min_idx].childNodes[0].innerText;
    bars[min_idx].style.height = bars[i].style.height;
    bars[i].style.height = temp1;
    bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText;
    bars[i].childNodes[0].innerText = temp2;
      
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 50)
    );
  
    bars[min_idx].style.backgroundColor = "  turquoise";
  
    bars[i].style.backgroundColor = " rgb(49, 226, 13)";
  }
  
  document.getElementById("Button1").disabled = false;
  document.getElementById("Button1").style.backgroundColor = "#6f459e";
  
  document.getElementById("Button2").disabled = false;
  document.getElementById("Button2").style.backgroundColor = "#6f459e";

  document.getElementById("Button3").disabled = false;
  document.getElementById("Button3").style.backgroundColor = "#6f459e";

  document.getElementById("Button5").disabled = false;
  document.getElementById("Button5").style.backgroundColor = "#6f459e";

  document.getElementById("Button4").disabled = false;
  document.getElementById("Button4").style.backgroundColor = "#6f459e";
}

let num =  Math.round(screen.width/25);

generatebars(num);

 function generate()
{
  window.location.reload();
 }
  
function disable()
{
  
  document.getElementById("Button1").disabled = true;
  document.getElementById("Button1").style.backgroundColor = "#d8b6ff";
  
  document.getElementById("Button2").disabled = true;
  document.getElementById("Button2").style.backgroundColor = "#d8b6ff";  

  document.getElementById("Button3").disabled = true;
  document.getElementById("Button3").style.backgroundColor = "#d8b6ff";

  document.getElementById("Button3").disabled = true;
  document.getElementById("Button3").style.backgroundColor = "#d8b6ff";

  document.getElementById("Button5").disabled = true;
  document.getElementById("Button5").style.backgroundColor = "#d8b6ff";

  document.getElementById("Button4").disabled = true;
  document.getElementById("Button4").style.backgroundColor = "#d8b6ff";
}