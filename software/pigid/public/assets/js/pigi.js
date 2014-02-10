var state = "IDLE";
var state_last = "";
var graph = [ 'profile', 'live'];
var points = [];
var profiles = [];
var selected_profile = 0;
var selected_profile_name = "leadfree";

var host = "ws://" + window.location.hostname + ":8080";
var ws = new WebSocket(host+"/ws");
var snd = new Audio("assets/tock.wav");

var audio = 0;
var count_unit = "CPM";


if(window.webkitRequestAnimationFrame) window.requestAnimationFrame = window.webkitRequestAnimationFrame;

graph.profile =
{
    label: "Profile",
    data: [],
    points: { show: false },
    color: "#75890c",
    draggable: false
};

graph.live =
{
    label: "Live",
    data: [],
    points: { show: false },
    color: "#d8d3c5",
    draggable: false
};


function toggleAudio()
{
  if (audio==0)
  {
    $('#audio-icon').html('<span class="glyphicon glyphicon-volume-up"></span>');
    $('#audio-status').html('<span class="ds-unit">ON</span>');
    audio=1;
  }
  else
  {
    $('#audio-icon').html('<span class="glyphicon glyphicon-volume-off"></span>');
    $('#audio-status').html('<span class="ds-unit">OFF</span>');
    audio=0;
  }
}

function toggleCounter()
{
  if(count_unit=="CPM")
  {
     $('#count_unit').html('CPS');
     count_unit = "CPS";
  }
  else
  {
      $('#count_unit').html('CPM');
      count_unit = "CPM";

  }
}


$(document).ready(function()
{

    if(!("WebSocket" in window))
    {
        //$('#chatLog, input, button, #examples').fadeOut("fast");
        $('<p>Oh no, you need a browser that supports WebSockets. How about <a href="http://www.google.com/chrome">Google Chrome</a>?</p>').appendTo('#container');
    }
    else
    {

        ws.onopen = function()
        {
            ws.send("weofewfo");
        };

        ws.onmessage = function(e)
        {
            x = JSON.parse(e.data);
           
            switch(x.type)
            {
               case "tick":
                 if(audio==1) snd.play();
               break;
               
	           case "status":
                 if(count_unit=="CPM") $('#act_count').html(parseInt(x.cpm));
                 if(count_unit=="CPS") $('#act_count').html(parseInt(x.cps));
                // $('#act_eqd').html(parseFloat(x.cps));
               break;
               default:
               
            }
        }

        ws.onclose = function()
        {   
          $.bootstrapGrowl("<span class=\"glyphicon glyphicon-exclamation-sign\"></span> <b>ERROR 1:</b><br/>Status Websocket not available", {
          ele: 'body', // which element to append to
          type: 'error', // (null, 'info', 'error', 'success')
          offset: {from: 'top', amount: 250}, // 'top', or 'bottom'
          align: 'center', // ('left', 'right', or 'center')
          width: 385, // (integer, or 'auto')
          delay: 5000,
          allow_dismiss: true,
          stackup_spacing: 10 // spacing between consecutively stacked growls.
          });
        };

        $("#e2").select2(
        {
            placeholder: "Select Profile",
            allowClear: false,
            minimumResultsForSearch: -1
        });


        $("#e2").on("change", function(e)
        {
            updateProfile(e.val);
        });

    }
});
