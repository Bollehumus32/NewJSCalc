// Variable definitions from HTML:
let calc_display = document.getElementById("display");

// ------------------------------------------------------------------------------------------------

// Event listener for mouse clicks to use calculator:
document.getElementById("container_calc").addEventListener('click', function(event)
{   
    if(event.target.classList.contains('btn-calc'))
    {
        let element = event.target.innerText;
        append(element);
    }
    
    else if(event.target.classList.contains('btn-operation'))
    {
        if(event.target.getAttribute('id') == 'clear')
        {
            clear_entry();
        }
        
        else if(event.target.getAttribute('id') == 'reset')
        {
            clear();
        }
        
        else
        {
            let element = event.target.getAttribute('data-value');
            append(element);
        }
    }
});

// ------------------------------------------------------------------------------------------------

// Event listener for keydown to use calculator without mouse:
document.addEventListener('keydown', function(event)
{
    
    if(event.key === 'Escape')
    {
        clear();
    }
    
    else if(event.key === 'Backspace')
    {
        clear_entry();
    }
    
    else if(event.key === 'Enter')
    {
        calculate();
    }
    
    else if(event.key >= '0' && event.key <= '9')
    {
        let num = event.key;
        append(num);
    }
    
    else if(event.key == '+')
    {
        append('+');
    }

    else if(event.key == '-')
    {
        append('-');
    }

    else if(event.key == '*')
    {
        append('*');
    }

    else if(event.key == '/')
    {
        append('/');
    }
});

// ------------------------------------------------------------------------------------------------

// Append function to add whatevers pressed to the display:
function append(element)
{
    calc_display.innerText += element;
}

// ------------------------------------------------------------------------------------------------

// Function to sort out user errors to smooth out user experience:
function sanitizeInput(input)
{
    // Regex for checking for multiple occurances of operators
    input = input.replace(/([+\-/*])+/g, "$1");

    // Remove any operators in the start unless minus
    input = input.replace(/^[+/*]/, "");

    return input;
}

// ------------------------------------------------------------------------------------------------

// AC or C:
function clear()
{
    calc_display.innerText = "";
}

// ------------------------------------------------------------------------------------------------

// CE:
function clear_entry()
{
    calc_display.innerText = calc_display.innerText.slice(0, -1);
}

// ------------------------------------------------------------------------------------------------

// Called upon "=" or "Enter",
// Will calculate answer using eval after sanitizing input:
function calculate()
{
    calc_display.innerText = sanitizeInput(calc_display.innerText);
    calc_display.innerText = eval(calc_display.innerText);
}

// ------------------------------------------------------------------------------------------------






