FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
EXPOSE 80
EXPOSE 443
FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
COPY . /app
WORKDIR /app
RUN dotnet restore "ContactListApi.csproj"
RUN dotnet build "ContactListApi.csproj" -c Release -o /app/build
FROM build AS publish
RUN dotnet publish "ContactListApi.csproj" -c Release -o /app/publish
FROM base AS final
COPY --from=publish /app/publish .
COPY ClientApp/build/. ClientApp/build/
ENTRYPOINT ["dotnet", "ContactListApi.dll"]
