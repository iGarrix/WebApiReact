#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
RUN apt -y update && apt -y install curl &&  curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh  && bash nodesource_setup.sh  && apt install -y nodejs

WORKDIR /app
COPY . .
RUN cd client-app/ && npm install && npm run-script build
RUN cd client-app &&  pwd && ls -l
WORKDIR /app/client-app/build
COPY .  client-app/build
WORKDIR /app
RUN dotnet restore "ContactListApi.csproj"
RUN cd client-app/build/  pwd && ls -l
RUN dotnet build "ContactListApi.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "ContactListApi.csproj" -c Release -o /app/publish

FROM base AS final
RUN pwd && ls -l
COPY --from=publish /app/publish .
WORKDIR /app
ENTRYPOINT ["dotnet", "ContactListApi.dll"]
