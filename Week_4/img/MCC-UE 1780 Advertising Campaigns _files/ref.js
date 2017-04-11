function ref_gc(c)
{
var r=document.cookie.match('(^|;)?'+c+'=([^;]*)(;|$)');
if(r)
return unescape(r[2]);
else
return null;
}
function ref_sc(n,v)
{
document.cookie=n+"="+escape(v)+'; path=/';
}
function ref_ol()
{
var r=ref_gc('ref');
if(!r)
{
r=document.location.pathname.substring(1).replace(/^inquiry\//,'');
if(r=='')r='homepage';
ref_sc('ref',r);
}
}
function ref_li(o)
{
var r=ref_gc('ref');
if(!r) return true;
document.location=o.href+"?Internet_Source="+r;
return false;
}
