var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();

//CORS add policy
builder.Services.AddCors(options => options.AddPolicy(name:"FrontendUI", policy => 
{ 
    policy.WithOrigins("https://localhost:44442").AllowAnyMethod().AllowAnyHeader(); 
}));
builder.Configuration.GetConnectionString("Default Connection");

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

//CORS activate
app.UseCors("FrontendUI");

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

app.Run();
